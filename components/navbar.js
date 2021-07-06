import Link from 'next/link';
import Router from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../store/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const handleLogout = () => {
        dispatch(loggedOut());
        Router.push("/login");
    };

    return (
        <header className="text-gray-600 body-font ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <span className="mr-5 hover:text-gray-900"><Link href="/"> Home </Link></span>
                    {token && <span className="mr-5 hover:text-gray-900"><Link href="/dashboard"> Dashboard </Link></span>}
                </nav>
                <div>
                    {token &&
                        <button onClick={handleLogout} className="inline-flex items-center text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 hover:text-black rounded text-base mt-4 md:mt-0 mx-3">
                            Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    }

                    {!token &&
                        <>
                            <Link href="/login" as="/login" >
                                <a className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 hover:text-black rounded text-base mt-4 md:mt-0 mx-3">
                                    Login
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="/register" as="/register" >
                                <a className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 hover:text-black rounded text-base mt-4 md:mt-0 mx-3">
                                    Register
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </header>
    );
}

export default Navbar;