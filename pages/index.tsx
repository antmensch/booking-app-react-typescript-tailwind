import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../src/components/footer/Footer";
import AllBestPlaces from "../src/components/home/best-place/AllBestPlaces";
import FeaturedDestinationCard from "../src/components/home/featured-destinations/FeaturedDestinationCard";
import { useFeaturedDestinations } from "../src/components/home/featured-destinations/useFeaturedDestinations";

const Home: NextPage = () => {
    const {
        featuredDestinations,
        isLoading: featuredDestinationsIsLoading,
        isError: featuredDestinationsIsError,
    } = useFeaturedDestinations();
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

                {/* Best Places Section */}
                <section className="bg-lightGray-700 pt-16 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="mx-auto w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-5xl">
                            Search a best place in the world
                        </h2>
                        <h4 className="mx-auto mt-2 w-7/12 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-base">
                            Whether you’re looking for places for a vacation. We
                            are here to Guide you about the details you need to
                            check in and ease your trips in advance
                        </h4>
                        <AllBestPlaces />
                    </div>
                </section>

                {/* TODO: Featured Destinations Section */}

                <section className="bg-lightGray-700 pt-16 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-left md:text-5xl">
                            Featured Destinations
                        </h2>
                        <h4 className="mt-2 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-left md:text-base">
                            Popular destinations open to visitors from Indonesia
                        </h4>
                        {featuredDestinationsIsLoading ? (
                            <div>Loading...</div>
                        ) : (
                            <div className="grid grid-rows-featured-6 gap-4 py-4 px-4 md:grid-flow-row md:grid-cols-8 md:grid-rows-12-40">
                                <div className="md:col-span-6 md:row-span-5">
                                    <FeaturedDestinationCard
                                        img={featuredDestinations[0].img}
                                        country={
                                            featuredDestinations[0].country
                                        }
                                        city={featuredDestinations[0].city}
                                        rating={featuredDestinations[0].rating}
                                        activities={
                                            featuredDestinations[0].activities
                                        }
                                    />
                                </div>
                                <div className="md:col-span-2 md:row-span-4">
                                    <FeaturedDestinationCard
                                        img={featuredDestinations[1].img}
                                        country={
                                            featuredDestinations[1].country
                                        }
                                        city={featuredDestinations[1].city}
                                        rating={featuredDestinations[1].rating}
                                        activities={
                                            featuredDestinations[1].activities
                                        }
                                    />
                                </div>
                                <div className="md:col-span-2 md:row-span-4">
                                    <FeaturedDestinationCard
                                        img={featuredDestinations[2].img}
                                        country={
                                            featuredDestinations[2].country
                                        }
                                        city={featuredDestinations[2].city}
                                        rating={featuredDestinations[2].rating}
                                        activities={
                                            featuredDestinations[2].activities
                                        }
                                    />
                                </div>
                                <div className="md:col-span-3 md:row-span-7">
                                    <FeaturedDestinationCard
                                        img={featuredDestinations[3].img}
                                        country={
                                            featuredDestinations[3].country
                                        }
                                        city={featuredDestinations[3].city}
                                        rating={featuredDestinations[3].rating}
                                        activities={
                                            featuredDestinations[3].activities
                                        }
                                    />
                                </div>
                                <div className="md:col-span-3 md:row-span-7">
                                    <FeaturedDestinationCard
                                        img={featuredDestinations[4].img}
                                        country={
                                            featuredDestinations[4].country
                                        }
                                        city={featuredDestinations[4].city}
                                        rating={featuredDestinations[4].rating}
                                        activities={
                                            featuredDestinations[4].activities
                                        }
                                    />
                                </div>
                                <div className="md:col-span-2 md:row-span-4">
                                    <FeaturedDestinationCard
                                        img={featuredDestinations[5].img}
                                        country={
                                            featuredDestinations[5].country
                                        }
                                        city={featuredDestinations[5].city}
                                        rating={featuredDestinations[5].rating}
                                        activities={
                                            featuredDestinations[5].activities
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </section>

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
