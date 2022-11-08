import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { RiSuitcaseLine, RiLogoutCircleLine } from "react-icons/ri";
import {signOut} from "next-auth/react"
import { User } from "../../types";

export default function UserMenu({ user }: { user: User }) {
    const [userMenuState, setUserMenuState] = useState<"open" | "closed">(
        "closed"
    );

    useEffect(() => {
        window.addEventListener("click", () => {
            setUserMenuState("closed");
        });
    }, []);

    return (
        <div className="relative">
            <div
                className="flex h-full w-48 cursor-pointer flex-row items-center justify-around px-2"
                onClick={(e) => {
                    e.stopPropagation();
                    if (userMenuState === "open") setUserMenuState("closed");
                    else setUserMenuState("open");
                }}
            >
                <div className="h-8 w-8 overflow-hidden rounded-full">
                    {user.image && (
                        <Image
                            src={user.image}
                            height={32}
                            width={32}
                            objectFit="fill"
                            className="scale-125"
                        />
                    )}
                </div>
                <div className="whitespace-nowrap font-roboto text-sm font-medium dark:text-white">
                    {user.name || ""}
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
                    <a onClick={() => signOut()}>
                        <RiLogoutCircleLine className="mr-3 inline-block text-darkGray-700 dark:text-lightGray-800" />
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
