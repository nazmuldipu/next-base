import { useState } from 'react'
import Joi from "joi-browser";
import Input from '../ui/input';

const useForm = ({ schema }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = ({ currentTarget: input }) => {
        if (input.type == "checkbox") input.value = input.checked;

        const faults = { ...errors };
        const errorMessage = validateProperty(input);
        if (errorMessage) faults[input.name] = errorMessage;
        else delete faults[input.name];
        setErrors(faults);

        const formData = { ...data };
        switch (input.type) {
            case "checkbox":
                formData[input.name] = JSON.parse(input.value);
                break;
            case "number":
                formData[input.name] = Number(input.value);
                break;

            default:
                formData[input.name] = input.value;
        }
        setData(formData);
    };

    const validateSubmit = (e) => {
        e.preventDefault();
        const fErrors = validateForm();
        setErrors(fErrors || {});
        if (fErrors) return false;
        return true;
    };

    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schemaP = { [name]: schema[name] };
        const { error } = Joi.validate(obj, schemaP);
        if (!error) return null;
        return error ? error.details[0].message : null;
    };

    const validateForm = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(data, schema, options);
        if (!error) return null;

        const formErrors = {};
        for (let item of error.details) {
            formErrors[item.path[0]] = item.message;
        }
        return formErrors;
    };

    const renderInput = (name, label, type = "text") => {
        return (
            <Input
                type={type}
                name={name}
                value={data[name] || ""}
                label={label}
                onChange={handleChange}
                error={errors[name]}
            />
        );
    };

    const renderButton = (label) => {
        return (
            <button disabled={!!validateForm()} className="w-full px-4 py-1 md:py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                {label}
            </button>
        );
    };

    return {
        data,
        validateSubmit,
        validateForm,
        renderInput,
        renderButton,
    };
};

export default useForm;