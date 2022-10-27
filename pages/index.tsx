import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen py-2">
            <Head>
                <title>Hotel booking app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" h-auto w-full">
                <section className="relative h-[650px] w-full">
                    <Image
                        src={
                            "https://res.cloudinary.com/dugybnapi/image/upload/v1666867096/hotel-app/hero_dwas34.jpg"
                        }
                        layout="fill"
                        objectFit="cover"
                    />
                </section>
            </main>
        </div>
    );
};

export default Home;
