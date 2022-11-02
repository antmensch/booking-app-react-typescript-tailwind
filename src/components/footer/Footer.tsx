import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";

function Footer() {
    return (
        <footer className="w-full bg-lightGray-800 px-8 pt-24 pb-4 dark:bg-darkGray-400">
            <div className="container mx-auto flex max-w-5xl flex-col-reverse md:flex-row">
                {/* Logo and mode toggle section */}
                <div className="space-y-6 md:w-1/3 md:max-w-2xl">
                    <div className="flex items-center">
                        <Image
                            src={logo}
                            width="40px"
                            height="38px"
                            className="h-8 w-8"
                        />
                        <span className="ml-2 font-dmsans text-xl font-bold text-darkGray-400 dark:text-white">
                            TripGuide
                        </span>
                    </div>
                    <p className="hidden pr-8 text-left leading-6 text-lightGray-100 dark:text-lightGray-300 md:block">
                        This is the team that specializes in making sure in the
                        find it a your interior looks cool
                    </p>
                </div>

                {/* Menus Group */}

                <div className="flex w-full flex-col justify-between md:flex-row">
                    {/* First Menu */}
                    <div className="border-lightGray-30000 border-b-2 py-4 md:border-b-0">
                        <h3 className="mb-4 font-dmsans text-2xl text-darkGray-400 dark:text-white">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#">
                                    <a className="hover:text-darkGray-10000 text-base text-lightGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Travel Booking
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="hover:text-darkGray-10000 text-base text-lightGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Flight Booking
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="hover:text-darkGray-10000 text-base text-lightGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Car Booking
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Fivestar Hotel
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="hover:text-darkGray-10000 text-base text-lightGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Traveling
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Second Menu */}
                    <div className="border-lightGray-30000 border-b-2 py-4 md:border-b-0">
                        <h3 className="mb-4 font-dmsans text-2xl text-darkGray-400 dark:text-white">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Account
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Legal
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Contact
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Terms &amp; Conditions
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Privacy policy
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Third Menu */}
                    <div className="py-4">
                        <h3 className="mb-4 font-dmsans text-2xl text-darkGray-400 dark:text-white">
                            Business
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Success
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        About Locato
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Information
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base text-lightGray-100 hover:text-darkGray-100 dark:text-lightGray-300 dark:hover:text-lightGray-100">
                                        Travel Guide
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
