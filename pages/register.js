import Link from 'next/link';

const Register = () => {
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
                    <form >
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="block w-full px-4 py-1 md:py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" className="block w-full px-4 py-1 md:py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">User name or Email</label>
                            <input type="email" id="email" name="email" className="block w-full px-4 py-1 md:py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="block w-full px-4 py-1 md:py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password_confirmation">Password Confirmation</label>
                            <input type="password" id="password_confirmation" name="password_confirmation" className="block w-full px-4 py-1 md:py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div className="mt-8">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Register
                            </button>
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