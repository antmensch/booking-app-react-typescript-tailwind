import { useState } from "react";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm() {
    const [passVisible, setPassVisible] = useState(true);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    console.log(loginData);
    return (
        <form className="mx-auto h-auto min-h-min w-full space-y-3 overflow-scroll rounded-3xl bg-white px-11 py-7 dark:bg-darkGray-200 sm:w-4/5 sm:max-w-lg">
            <h2 className="text-center text-2xl font-bold text-darkGray-200 dark:text-lightGray-400 md:text-4xl">
                Welcome Back!
            </h2>
            <div className="flex flex-row justify-between">
                <button className="text-md flex w-full items-center justify-center rounded-lg bg-blue-accent py-3 text-white hover:bg-blue-dark dark:text-lightGray-400 md:text-xl">
                    <BsGoogle className="text-lg md:text-2xl" />
                    <span className="ml-3">
                        <span className="hidden sm:inline">Sign in with</span>
                        <span> Google</span>
                    </span>
                </button>
                <button className="ml-3 flex w-24 items-center justify-center rounded-lg bg-darkGray-600 text-lg text-white hover:bg-darkGray-300 dark:text-lightGray-400">
                    <FaFacebookF />
                </button>
            </div>
            <div className="flex flex-row items-center justify-between px-14 text-lightGray-100">
                <hr className="w-full border-1 border-b-0" />
                <span className="mx-3 whitespace-nowrap text-2xs md:text-sm">
                    or continue with
                </span>
                <hr className="w-full border-1 border-b-0" />
            </div>
            <div className="flex flex-col text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 md:text-sm">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className="input-text"
                    placeholder="email"
                    value={loginData.email}
                    onChange={(e) =>
                        setLoginData({
                            ...loginData,
                            email: e.target.value,
                        })
                    }
                />
            </div>
            <div className="flex flex-col text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 md:text-sm">
                <label htmlFor="password">Password</label>
                <div className="relative w-full">
                    <input
                        type={passVisible ? "text" : "password"}
                        id="password"
                        className="input-text w-full pr-9"
                        placeholder="password"
                        autoComplete="false"
                        value={loginData.password}
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                password: e.target.value,
                            })
                        }
                    />
                    <div
                        className="absolute top-3 right-4 cursor-pointer text-base text-lightGray-100 md:top-5"
                        onClick={() => setPassVisible((curr) => !curr)}
                    >
                        {passVisible ? (
                            <AiOutlineEyeInvisible />
                        ) : (
                            <AiOutlineEye />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-end text-2xs font-normal text-blue-dark md:text-sm">
                <Link href="#">
                    <a>Forgot your password?</a>
                </Link>
            </div>

            <button className="text-md w-full rounded-lg bg-blue-accent py-3 font-bold text-white hover:bg-blue-dark md:text-xl">
                Sign in
            </button>
            <div className="text-center text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 md:text-sm">
                Don't have an account?
                <Link href="/signup">
                    <a className=" text-blue-accent">Sign up</a>
                </Link>
            </div>
        </form>
    );
}

export default LoginForm;
