import { useSelector, useDispatch } from "react-redux";
import { loggedOut, getToken } from "../../store/authSlice";
import { useEffect } from 'react'
import Router from 'next/router'
import DashLayout from './../../components/layouts/dashLayout';

const Dashboard = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!token) {
            const tok = getToken(dispatch);
            if (!tok)
                Router.push(`/login`)
        }
    }, [token])

    const handleLogout = () => {
        dispatch(loggedOut());
        Router.push("/login");
    };

    return (
        <DashLayout>
            <div class="bg-white dark:bg-gray-800">
                <div class="container px-6 py-16 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg">
                                <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To think about your dashboard layout</h1>
                                <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <div className="mt-8">
                                    <a href="https://www.tailwind-kit.com/components" target="_blank"
                                        class=" px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">See examples</a>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full lg:max-w-2xl" src="hero.svg" alt="hero.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </DashLayout>
    );
}

export default Dashboard;