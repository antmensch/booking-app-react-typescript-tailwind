import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

function Header() {
    return (
        <div className="flex h-20 w-full items-center">
            <header className="container sticky mx-auto flex justify-between">
                <Link href="/">
                    <a className="flex items-center justify-around">
                        <Image src={logo} width="40px" height="40px" />
                        <span className="ml-2">TripGuide</span>
                    </a>
                </Link>
                <div className="flex items-center justify-between">
                    <div>Night mode toggle</div>
                    <div>buttons group</div>
                </div>
            </header>
        </div>
    );
}

export default Header;
