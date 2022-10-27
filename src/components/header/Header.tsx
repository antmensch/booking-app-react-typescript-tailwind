import React from "react";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { BsSun, BsMoon } from "react-icons/bs";

interface HeaderProps {
    colorTheme: "light" | "dark";
    setColorTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

function Header({ colorTheme, setColorTheme }: HeaderProps) {
    return (
        <div className="fixed top-0 left-0 flex w-full items-center text-xl font-bold dark:bg-darkGray-300 sm:h-20">
            <header className="container mx-auto flex flex-col justify-between py-2 sm:flex-row sm:py-0">
                <Link href="/">
                    <a className="flex items-center justify-center">
                        <Image src={logo} width="40px" height="40px" />
                        <span className="ml-2 font-dmsans dark:text-white">
                            TripGuide
                        </span>
                    </a>
                </Link>
                <div className="mt-1 flex flex-col-reverse items-center justify-center sm:mt-0 sm:flex-row sm:justify-between">
                    <div className="mt-2 flex items-center justify-center">
                        <input
                            type="checkbox"
                            id="darkmode-toggle"
                            checked={colorTheme === "dark"}
                            onChange={() => {
                                if (colorTheme === "light")
                                    setColorTheme("dark");
                                else setColorTheme("light");
                            }}
                        />
                        <label
                            htmlFor="darkmode-toggle"
                            className="darkmode-label relative block h-7 w-16 cursor-pointer rounded-full bg-lightGray-500 shadow-inner shadow-lightGray-200 dark:shadow-darkGray-600"
                        >
                            <BsSun className="darkmode-sun" />
                            <BsMoon className="darkmode-moon" />
                        </label>
                    </div>
                    <div>
                        <button
                            onClick={() => console.log("login button clicked")}
                            className="ml-4 px-4 py-2 font-bold dark:text-white"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => console.log("signup button clicked")}
                            className="ml-4 rounded-xl bg-blue-accent px-4 py-2 font-medium text-white hover:bg-blue-dark"
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
