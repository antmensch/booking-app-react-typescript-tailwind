import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col  items-center justify-center py-2">
            <Head>
                <title>Hotel booking app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full">
                <h1 className="t mx-auto text-3xl">Home Page</h1>
            </main>
        </div>
    );
};

export default Home;
