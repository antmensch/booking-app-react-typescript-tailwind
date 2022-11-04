import React, { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { BsSun, BsMoon, BsArrow90DegDown } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { RiSuitcaseLine, RiLogoutCircleLine } from "react-icons/ri";
import useUser from "../../hooks/useUser";

interface HeaderProps {
    colorTheme: "light" | "dark";
    setColorTheme: (theme: "dark" | "light") => void;
}

function Header({ colorTheme, setColorTheme }: HeaderProps) {
    // fetching user data using the useUser custom hook
    const { user, isLoading: userLoading } = useUser();

    // state for the user menu
    const [userMenuState, setUserMenuState] = useState<"open" | "closed">(
        "closed"
    );

    // useEffect adding event listener to the window so that user menu closes when the window is clicked
    useEffect(() => {
        window.addEventListener("click", () => {
            setUserMenuState("closed");
        });
    }, []);
    return (
        <div className="fixed top-0 left-0 z-30 flex w-full items-center bg-white text-xl font-bold dark:bg-darkGray-300 sm:h-20">
            <header className="container mx-auto flex flex-col justify-between py-2 sm:flex-row sm:py-0">
                {/* Logo */}
                <Link href="/">
                    <a className="flex items-center justify-center">
                        <Image src={logo} width="40px" height="40px" />
                        <span className="ml-2 font-dmsans dark:text-white">
                            TripGuide
                        </span>
                    </a>
                </Link>
                {/* Night mode toggle */}
                <div className="mt-4 mb-2 flex items-center justify-center sm:mt-0 sm:flex-row sm:justify-between">
                    <div className="mr-4 flex items-center justify-center">
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
                    {/* TODO: Update when auth is implemented */}
                    {(
                        // Login and Signup buttons
                        <div>
                            <button
                                onClick={() =>
                                    console.log("login button clicked")
                                }
                                className="ml-4 px-4 py-2 font-bold dark:text-white"
                            >
                                Login
                            </button>
                            <button
                                onClick={() =>
                                    console.log("signup button clicked")
                                }
                                className="ml-4 rounded-xl bg-blue-accent px-4 py-2 font-medium text-white hover:bg-blue-dark"
                            >
                                Signup
                            </button>
                        </div>
                    ) ||
                        // User menu rendered if the user is logged in
                        (userLoading ? (
                            <span className="text-xs">Loading...</span>
                        ) : (
                            <div className="relative">
                                <div
                                    className="flex h-full w-48 cursor-pointer flex-row items-center justify-around px-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (userMenuState === "open")
                                            setUserMenuState("closed");
                                        else setUserMenuState("open");
                                    }}
                                >
                                    <div className="h-8 w-8 overflow-hidden rounded-full">
                                        <Image
                                            src={user.picsrc}
                                            height={32}
                                            width={32}
                                            objectFit="fill"
                                            className="scale-125"
                                        />
                                    </div>
                                    <div className="whitespace-nowrap font-roboto text-sm font-medium dark:text-white">
                                        {user.name}
                                    </div>
                                    <GoTriangleDown
                                        className={`cursor-pointer text-darkGray-600 dark:text-white ${
                                            userMenuState === "open" &&
                                            "rotate-180 transition-transform"
                                        }`}
                                    />
                                </div>

                                {/* User menu */}
                                <ul
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    className={`text-md absolute right-0 top-12 w-48 cursor-default list-none space-y-4 overflow-hidden rounded-2xl bg-white p-4 font-dmsans text-sm font-medium text-darkGray-400 opacity-100 shadow-md transition-all dark:bg-darkGray-400 dark:text-white ${
                                        userMenuState === "closed" && "h-0 py-0"
                                    }`}
                                >
                                    <li className="cursor-pointer transition hover:text-lightGray-100">
                                        <Link href={"/"}>
                                            <a>
                                                <FiUser className="mr-3 inline-block text-darkGray-700 dark:text-lightGray-800" />
                                                <span>My Profile</span>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="cursor-pointer transition hover:text-lightGray-100">
                                        <Link href={"/"}>
                                            <a>
                                                <RiSuitcaseLine className="mr-3 inline-block text-darkGray-700 dark:text-lightGray-800" />
                                                <span>Bookings</span>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="cursor-pointer transition hover:text-lightGray-100">
                                        <a>
                                            <RiLogoutCircleLine className="mr-3 inline-block text-darkGray-700 dark:text-lightGray-800" />
                                            <span>Sign Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                </div>
            </header>
        </div>
    );
}

export default Header;
