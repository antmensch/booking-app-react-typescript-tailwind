import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { BsSun, BsMoon } from "react-icons/bs";

function Header() {
    return (
        <div className="flex h-20 w-full items-center bg-white">
            <header className="container sticky mx-auto flex justify-between">
                <Link href="/">
                    <a className="flex items-center justify-around">
                        <Image src={logo} width="40px" height="40px" />
                        <span className="ml-2">TripGuide</span>
                    </a>
                </Link>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <input type="checkbox" id="darkmode-toggle" />
                        <label
                            htmlFor="darkmode-toggle"
                            className="darkmode-label relative block h-6 w-16 cursor-pointer rounded-full bg-lightGray-500 shadow-inner shadow-lightGray-200"
                        >
                            <BsSun className="darkmode-sun" />
                            <BsMoon className="darkmode-moon" />
                        </label>
                    </div>
                    <div>
                        <button
                            onClick={() => console.log("login button clicked")}
                            className="ml-4 px-4 py-2"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => console.log("signup button clicked")}
                            className="ml-4 rounded-xl bg-blue-accent px-4 py-2 text-white hover:bg-blue-dark"
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
