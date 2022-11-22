import React, { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { BsSun, BsMoon, BsArrow90DegDown } from "react-icons/bs";

import useUser from "../../hooks/useUser";
import LoginModal from "../login/LoginModal";
import SignupModal from "../signup/SignupModal";
import { useModal } from "../../hooks/useModal";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import UserMenu from "./UserMenu";

interface HeaderProps {
    colorTheme: "light" | "dark";
    setColorTheme: (theme: "dark" | "light") => void;
}

function Header({ colorTheme, setColorTheme }: HeaderProps) {
    const router = useRouter();

    const { data: session, status } = useSession();
    function handleLoginClick() {
        if (loginModalState === "closed") setLoginModalState("open");
        else if (loginModalState === "open") setLoginModalState("closed");
    }

    function handleSignupClick() {
        if (loginModalState === "closed") setSignupModalState("open");
        else if (signupModalState === "open") setSignupModalState("closed");
    }

    const { modalState: loginModalState, setModalState: setLoginModalState } =
        useModal();

    const { modalState: signupModalState, setModalState: setSignupModalState } =
        useModal();

    return (
        <div className="fixed top-0 left-0 z-30 flex w-full items-center bg-white text-xl font-bold dark:bg-darkGray-300 sm:h-20">
            <header className="container mx-auto flex flex-col justify-between py-2 sm:flex-row sm:py-0">
                {/* Login Modal rendering */}
                {loginModalState === "open" && (
                    <LoginModal
                        modalState={loginModalState}
                        setModalState={setLoginModalState}
                    />
                )}
                {/* Signup Modal rendering */}
                {signupModalState === "open" && (
                    <SignupModal
                        modalState={signupModalState}
                        setModalState={setSignupModalState}
                    />
                )}
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
                    {status == "authenticated" && session.user ? (
                        <UserMenu user={session.user} />
                    ) : (
                        router.pathname.includes("login") ||
                        router.pathname.includes("signup") || (
                            <div>
                                <button
                                    onClick={handleLoginClick}
                                    className="ml-4 px-4 py-2 font-bold dark:text-white"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={handleSignupClick}
                                    className="ml-4 rounded-xl bg-blue-accent px-4 py-2 font-medium text-white hover:bg-blue-dark"
                                >
                                    Signup
                                </button>
                            </div>
                        )
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;
