import Link from 'next/link';
import Joi from "joi-browser";
import useForm from '../components/utils/useForm';

const Register = () => {
    const schema = {
        name: Joi.string().min(2).required().label("Name"),
        phone: Joi.string().required().regex(/^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$/, "Phone").label("Phone number"),
        email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
        password: Joi.string().min(6).required().label("Password"),
        password_confirmation: Joi.string().min(6).required().label("Confirm Password"),
    };

    const { data, renderInput, renderButton, validateSubmit } = useForm({
        schema,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateSubmit(e)) {
            // onSubmit(data);
            console.log(data);
        }
    };


    return (<div className="absolute w-full h-full bg-red-50 overflow-hidden" >
        <div className="max-w-full md:max-w-4xl mx-auto mt-4 md:mt-10 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="hidden md:block w-full h-full bg-origin-border bg-center bg-no-repeat bg-cover" style={{ "backgroundImage": `url('background.png')` }}>
                    <h1 className="font-light text-2xl text-center pt-10">Your trusted partner</h1>
                </div>
                <div className="w-full bg-white p-4 md:p-8">
                    <div className="grid grid-flow-col auto-cols-max">
                        <a href="/" className="inline-block">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="logo.svg"
                                alt=""
                            />
                        </a>
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white pl-4">Next.js Base</h2>
                    </div>
                    <p className="text-base text-gray-400 dark:text-gray-200">Welcome! Please provide your info.</p>
                    <div className="flex items-center justify-between mt-2">
                        <span className="w-1/6 border-b dark:border-gray-600"></span>
                        <div className="text-base md:text-xl text-center text-gray-900 uppercase dark:text-gray-400">register with email</div>
                        <span className="w-1/6 border-b dark:border-gray-400"></span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {renderInput("name", "Name*")}
                        {renderInput("phone", "Phone*")}
                        {renderInput("email", "User name or Email*", "email")}
                        {renderInput("password", "Password*", "password")}
                        {renderInput("password_confirmation", "Confirm Password*", "password")}
                        <div className="mt-4 md:mt-8">
                            {renderButton("Login")}
                        </div>
                    </form>
                    
                    <div className="flex items-center justify-between mt-2">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <span className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"><Link href="/login"> or login </Link></span>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;