import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../src/components/footer/Footer";
import AllBestPlaces from "../src/components/home/best-place/AllBestPlaces";
import ExploreWorldSection from "../src/components/home/explore-world/ExploreWorldSection";
import FeaturedDestinationCard from "../src/components/home/featured-destinations/FeaturedDestinationCard";
import { useFeaturedDestinations } from "../src/components/home/featured-destinations/useFeaturedDestinations";
import TopTourSection from "../src/components/home/top-tour/TopTourSection";
import TrendingCitiesSection from "../src/components/home/trending-cities/TrendingCitiesSection";
import clientPromise from "../src/utils/mongodb/mongodb";
import type { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("test");

        return {
            props: { isConnected: true },
        };
    } catch (e) {
        console.error(e);

        return {
            props: { isConnected: false },
        };
    }
}

const Home = ({
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {
        featuredDestinations,
        isLoading: featuredDestinationsIsLoading,
        isError: featuredDestinationsIsError,
    } = useFeaturedDestinations();

    console.log(isConnected);
    return (
        <div className="flex min-h-screen">
            <Head>
                <title>Hotel booking app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-auto w-full">
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
                <section className="bg-lightGray-700 pt-10 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="mx-auto w-full px-16 text-center text-3xl font-bold text-darkGray-400 dark:text-white md:px-0 md:text-5xl">
                            Search the best place in the world
                        </h2>
                        <h4 className="mx-auto mt-2 w-7/12 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-base">
                            Whether you’re looking for places for a vacation. We
                            are here to Guide you about the details you need to
                            check in and ease your trips in advance
                        </h4>
                        <AllBestPlaces />
                    </div>
                </section>

                {/* Featured Destinations Section */}

                <section className="bg-lightGray-700 pt-10 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-left md:text-5xl">
                            Featured Destinations
                        </h2>
                        <h4 className="mt-2 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-left md:text-base">
                            Popular destinations open to visitors from Indonesia
                        </h4>
                        {featuredDestinationsIsLoading ||
                        featuredDestinationsIsError ? (
                            <div>Loading...</div>
                        ) : (
                            <div className="grid grid-rows-featured-6 gap-4 py-4 px-4 md:grid-flow-row md:grid-cols-8 md:grid-rows-12-40 md:px-0">
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

                {/* Top Tour Section */}

                <section className="bg-lightGray-700 py-4 pt-10 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-left md:text-5xl">
                            Top Tour
                        </h2>
                        <h4 className="mt-2 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-left md:text-base">
                            Keep calm & Travel on
                        </h4>
                        <TopTourSection />
                    </div>
                </section>

                {/* Explore the World Section */}
                <section className="bg-lightGray-700 pb-20 pt-10 dark:bg-darkGray-200">
                    <div className="container mx-auto">
                        <h2 className="w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-left md:text-5xl">
                            Explore The World
                        </h2>
                        <h4 className="mt-2 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-left md:text-base">
                            10,788 Beautiful Places to go to
                        </h4>
                        <ExploreWorldSection />
                    </div>
                </section>

                {/* Trending Cities Section */}
                <section className="bg-lightGray-800 pt-10 dark:bg-darkGray-100 md:pb-20">
                    <div className="container mx-auto">
                        <h2 className="w-full text-center text-3xl font-bold text-darkGray-400 dark:text-white md:text-left md:text-5xl">
                            Trending Cities
                        </h2>
                        <h4 className="mt-2 py-2 text-center text-sm leading-6 text-lightGray-100 dark:text-lightGray-300 md:w-1/2 md:text-left md:text-base">
                            The most searched for cities on TripGuide
                        </h4>
                        <TrendingCitiesSection />
                    </div>
                </section>

                {/* CTA section */}
                <section className="bg-lightGray-700 dark:bg-darkGray-200">
                    <div className="containter mx-auto px-6 dark:bg-darkGray-200">
                        <div className="container mx-auto max-w-6xl ">
                            <div className="cta relative top-16 flex flex-col items-center justify-between rounded-2xl bg-blue-accent py-6 px-20 md:flex-row md:py-12">
                                {/* Text */}
                                <div className="space-y-4">
                                    <h2 className="font-poppins text-4xl font-extrabold tracking-wide text-white">
                                        Get our pro offers
                                    </h2>
                                    <p className="font-light text-white">
                                        Create a visual identity for your
                                        company, and an overall brand
                                    </p>
                                </div>

                                <form className="mt-3 flex w-2/3 flex-col md:mt-0 md:w-1/3 md:flex-row">
                                    <input
                                        className="md:text-darkGray-1 w-full rounded-sm py-4 text-center text-xs focus:outline-none md:w-full md:pl-6 md:pr-32 md:text-left"
                                        type="email"
                                        placeholder="Type your email here"
                                    />
                                    <button
                                        className="active:bg-darkGray-2 mt-3 rounded-sm bg-darkGray-200 py-3 text-xs text-white hover:bg-darkGray-100 focus:outline-none md:my-1 md:-ml-28 md:px-6"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Home;
