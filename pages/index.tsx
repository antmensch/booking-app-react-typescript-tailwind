import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../src/components/footer/Footer";

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
                        objectPosition="75%"
                    />
                    <div className="absolute top-0 left-0 md:mx-20">
                        <div className="container">
                            <h2 className="mt-32 ml-10 font-dmsans text-4xl font-extrabold leading-tight text-darkGray-600 sm:ml-20 md:text-5xl md:leading-snug xl:text-7xl">
                                Book With Us
                                <br />
                                And Enjoy your
                                <br />
                                Journey!
                            </h2>
                        </div>
                    </div>
                </section>

                {/* TODO: Best Places Section */}
                <section className="pt-16 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="mx-auto w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-5xl">
                            Search a best place in the world
                        </h2>
                        <h4 className="mx-auto mt-2 w-7/12 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-base">
                            Whether you’re looking for places for a vacation. We
                            are here to Guide you about the details you need to
                            check in and ease your trips in advance
                        </h4>
                        <div className="grid grid-cols-4 grid-rows-2 gap-7">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                        </div>
                    </div>
                </section>

                {/* TODO: Featured Destinations Section */}

                {/* TODO: Top Tour Section */}

                {/* TODO: Explore the World Section */}

                {/* TODO: Trending Cities Section */}

                {/* TODO: CTA section */}

                <Footer />
            </main>
        </div>
    );
};

export default Home;
