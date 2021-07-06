import { useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link';
import Joi from "joi-browser";
import useForm from '../components/utils/useForm';
import { useDispatch, useSelector } from "react-redux";
import { login, getErrorMessage, getToken } from '../store/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => getErrorMessage(state));
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (!token) {
            getToken(dispatch)            
        } else{
            Router.push(`/dashboard`)
        }
    }, [token])

    const schema = {
        email: Joi.string().email()
            .required().label("User name or Email"),
        password: Joi.string().required().min(6).label("Password"),
    };

    const { data, renderInput, renderButton, validateSubmit } = useForm({
        schema,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateSubmit(e)) {
            dispatch(login(data));
        }
    };

    return (
        <div className="absolute w-full h-full bg-red-50 overflow-hidden" >
            <div className="max-w-full md:max-w-4xl mx-auto mt-4 md:mt-10 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="hidden md:block w-full h-full bg-origin-border bg-center bg-no-repeat bg-cover" style={{ "backgroundImage": `url('background.png')` }}>
                        <h1 className="font-light text-2xl text-center pt-10">Your trusted partner</h1>
                    </div>
                    <div className="w-full bg-white p-4 md:p-8">
                        <div className="grid grid-flow-col auto-cols-max">
                            <Link href="/">
                                <a className="grid grid-flow-col auto-cols-max">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src="logo.svg"
                                        alt=""
                                    />
                                    <h2 className="h-full pt-1 text-2xl font-semibold text-gray-700 dark:text-white pl-4">Base</h2>
                                </a>
                            </Link>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 dark:text-gray-200">Welcome back! Please login to your account.</p>
                        <div className="flex items-center justify-between mt-2">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                            <div className="text-base md:text-xl text-center text-gray-900 uppercase dark:text-gray-400">login with email</div>
                            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                        </div>
                        <div className="text-sm font-bold text-red-500">{error}</div>
                        <form onSubmit={handleSubmit}>
                            {renderInput("email", "User name or Email", "email")}
                            {renderInput("password", "Password", "password")}
                            <div className="mt-4 md:mt-8">
                                {renderButton("Login")}
                            </div>
                        </form>

                        <div className="flex items-center justify-between mt-2">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            <span className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"><Link href="/register"> or sign up </Link></span>
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
