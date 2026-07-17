import React from "react";
import {Link, NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                             <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                             <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
