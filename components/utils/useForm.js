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

    const renderButton = (label, loading = false) => {
        return (
            <button disabled={!!validateForm() || loading}
                className={`${loading ? "cursor-not-allowed" : ""}  inline-flex items-center tracking-wide text-white bg-gray-500 hover:bg-gray-700 focus:bg-gray-700  focus:outline-none transform transition-colors py-1 px-3 rounded text-base`}>
                {loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}
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