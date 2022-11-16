import Link from "next/link";
import React from "react";

export default function Error() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <h2>Ooops.. something went wrong.</h2>

                <Link href={"/"}>
                    <a>Go to homepage</a>
                </Link>
            </div>
        </div>
    );
}
