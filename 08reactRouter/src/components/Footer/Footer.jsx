import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}