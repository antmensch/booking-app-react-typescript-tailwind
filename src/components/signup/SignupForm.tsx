import { useState } from "react";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignupForm() {
    const [passVisible, setPassVisible] = useState(true);
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        termsConsent: false,
    });

    function handleInputChange(e: { target: { id: string; value: string } }) {
        if (!e.target) return;
        setSignupData({
            ...signupData,
            [e.target.id]: e.target.value,
        });
    }

    return (
        <form className="mx-auto h-auto min-h-min w-full space-y-1 overflow-scroll rounded-3xl bg-white px-11 py-7 dark:bg-darkGray-200 md:space-y-2">
            <h2 className="text-center text-2xl font-bold text-darkGray-200 dark:text-lightGray-400 md:text-4xl">
                Let's Go
            </h2>
            <div className="flex flex-row justify-between">
                <button className="text-md flex w-full items-center justify-center rounded-lg bg-blue-accent py-3 text-white hover:bg-blue-dark dark:text-lightGray-400 md:text-xl">
                    <BsGoogle className="text-lg md:text-2xl" />
                    <span className="ml-3">
                        <span className="hidden sm:inline">Signup with</span>
                        <span> Google</span>
                    </span>
                </button>
                <button className="ml-3 flex w-24 items-center justify-center rounded-lg bg-darkGray-600 text-2xl text-white hover:bg-darkGray-300 dark:text-lightGray-400">
                    <FaGithub />
                </button>
            </div>
            <div className="flex flex-row items-center justify-between px-14 text-lightGray-100">
                <hr className="w-full border-1 border-b-0" />
                <span className="mx-3 whitespace-nowrap text-2xs md:text-sm">
                    or continue with
                </span>
                <hr className="w-full border-1 border-b-0" />
            </div>
            <div className="flex flex-col justify-between text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 sm:flex-row sm:space-x-4 md:text-sm">
                <div className="flex w-full flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className="input-text"
                        placeholder="First Name"
                        value={signupData.firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="flex w-full flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="input-text"
                        placeholder="Last Name"
                        value={signupData.lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
            </div>
            <div className="flex flex-col text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 md:text-sm">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className="input-text"
                    placeholder="email"
                    value={signupData.email}
                    onChange={(e) => handleInputChange(e)}
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
                        value={signupData.password}
                        onChange={(e) => handleInputChange(e)}
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
            <div className="w-2/3 text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 md:text-sm">
                <input
                    type="checkbox"
                    id="termsAccepted"
                    checked={signupData.termsConsent}
                    onChange={() =>
                        setSignupData({
                            ...signupData,
                            termsConsent: !signupData.termsConsent,
                        })
                    }
                />
                <label className="ml-2" htmlFor="termsAccepted">
                    I’ve read and accepted
                    <Link href="#">
                        <a className="cursor-pointer text-blue-dark">
                            {" "}
                            Terms of Service{" "}
                        </a>
                    </Link>
                    and
                    <Link href="#">
                        <a className="cursor-pointer text-blue-dark">
                            {" "}
                            Privacy Policy{" "}
                        </a>
                    </Link>
                </label>
            </div>
            <button className="text-md w-full rounded-lg bg-blue-accent py-3 font-bold text-white hover:bg-blue-dark md:text-xl">
                Signup
            </button>
            <div className="text-center text-2xs font-normal text-darkGray-600 dark:text-lightGray-400 md:text-sm">
                Already have an account?
                <Link href="/login">
                    <a className=" text-blue-accent">Sign in</a>
                </Link>
            </div>
        </form>
    );
}

export default SignupForm;
