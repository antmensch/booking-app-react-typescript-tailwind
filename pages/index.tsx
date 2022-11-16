import Head from "next/head";
import Image from "next/image";
import Footer from "../src/components/footer/Footer";
import {
    BestPlacesSection,
    BestPlace,
} from "../src/components/home/best-place/BestPlacesSection";
import {
    ExploreWorldSection,
    ExploreWorld,
} from "../src/components/home/explore-world/ExploreWorldSection";
import {
    TopTourSection,
    TopTour,
} from "../src/components/home/top-tour/TopTourSection";
import {
    TrendingCitiesSection,
    TrendingCity,
} from "../src/components/home/trending-cities/TrendingCitiesSection";
import type { InferGetStaticPropsType, NextPageContext } from "next";
import {
    FeaturedDestinationsSection,
    FeaturedDestination,
} from "../src/components/home/featured-destinations/FeaturedDestinationsSection";
import clientPromise from "../src/utils/mongodb/mongodb";
import { ObjectId } from "mongodb";

export async function getStaticProps(context: NextPageContext) {
    async function getHomePageData() {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const result = await db
            .collection("homepage")
            .findOne({ _id: new ObjectId("6375474f1407ffcb74430804") });
        return result;
    }

    const homePageData = await getHomePageData().then((result) => result?.data);
    console.log(homePageData);

    // TODO: FIX THIS!!!
    if (true)
        return {
            props: {
                bestPlace: [
                    {
                        country: "China",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-manuel-joseph-19872_qclbdo_xtuqyq.jpg",
                        destinations: 86,
                    },
                    {
                        country: "India",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-darshak-pandya-574313_ykrw9c_uyprf9.jpg",
                        destinations: 98,
                    },
                    {
                        country: "Maldivies",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-asad-photo-maldives-1483053_ic6pbi_wezb3s.jpg",
                        destinations: 132,
                    },
                    {
                        country: "Israel",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-mauricio-artieda-610533_hxpgok_xh0jak.jpg",
                        destinations: 72,
                    },
                    {
                        country: "France",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-pixabay-2363_pqxtxj_xemtvd.jpg",
                        destinations: 201,
                    },
                    {
                        country: "Morocco",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359667/hotel-app/best-place/pexels-pixabay-273935_xseyqa_afwne7.jpg",
                        destinations: 66,
                    },
                    {
                        country: "Brazil",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-florencia-potter-351283_u9r32s_clgznt.jpg",
                        destinations: 139,
                    },
                    {
                        country: "Egypt",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666359666/hotel-app/best-place/pexels-david-mceachan-71241_ojwpwd_hakrvn.jpg",
                        destinations: 48,
                    },
                ],
                featuredDestinations: [
                    {
                        city: "Barcelona",
                        country: "Spain",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528926/hotel-app/featured-destinations/pexels-aleksandar-pasaric-1388030_jalzsm_al2c9r.jpg",
                        rating: 4.1,
                        activities: 250,
                    },
                    {
                        city: "Sydney ",
                        country: "Australia",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528926/hotel-app/featured-destinations/pexels-patrick-mclachlan-995765_nakswl_bmgkrt.jpg",
                        rating: 4.5,
                        activities: 124,
                    },
                    {
                        city: "London",
                        country: "UK",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528926/hotel-app/featured-destinations/pexels-chris-schippers-427679_rqchvp_vueawc.jpg",
                        rating: 4.0,
                        activities: 299,
                    },
                    {
                        city: "Paris",
                        country: "France",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528926/hotel-app/featured-destinations/pexels-chris-molloy-1308940_vecke4_lvdi33.jpg",
                        rating: 4.2,
                        activities: 179,
                    },
                    {
                        city: "Tokyo",
                        country: "Japan",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528928/hotel-app/featured-destinations/pexels-aleksandar-pasaric-2506923_szxh0t_qmnszk.jpg",
                        rating: 4.8,
                        activities: 160,
                    },
                    {
                        city: "Hanoi",
                        country: "Vietnam",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528928/hotel-app/featured-destinations/pexels-huy-phan-1437618_li5ydp_itlkoe.jpg",
                        rating: 4.5,
                        activities: 210,
                    },
                ],
                topTour: [
                    {
                        country: "Japan",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528936/hotel-app/top-tour/pexels-belle-co-402028_ipui4w_ybe88g.jpg",
                        place: "Japan",
                        placesQty: 10,
                    },
                    {
                        country: "Bali",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528936/hotel-app/top-tour/pexels-kimberly-mcneilus-2480626_eb5zha_nmzi4h.jpg",
                        place: "Indonesia",
                        placesQty: 7,
                    },
                    {
                        country: "Spain",
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528936/hotel-app/top-tour/pexels-samuel-sweet-6145647_hwigz4_elkxps.jpg",
                        place: "Barcelona",
                        placesQty: 19,
                    },
                ],
                exploreWorld: [
                    {
                        title: "Comfort Space",
                        city: "Marmaris",
                        country: "Turkey",
                        price: 220,
                        "distance-from-city-center": "1.2 km",
                        rating: 4.7,
                        "amount-of-rating": 150,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528923/hotel-app/explore-world/pexels-binyamin-mellish-106399_icqiwy_vddtbg.jpg",
                    },
                    {
                        title: "Comfort Space",
                        city: "Paris",
                        country: "France",
                        price: 110,
                        "distance-from-city-center": "3 km",
                        rating: 5,
                        "amount-of-rating": 150,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528923/hotel-app/explore-world/pexels-binyamin-mellish-1396122_prtue5_uhtvwj.jpg",
                    },
                    {
                        title: "Comfort Space",
                        city: "Madrid",
                        country: "Spain",
                        price: 300,
                        "distance-from-city-center": "0.6 km",
                        rating: 4.5,
                        "amount-of-rating": 150,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528923/hotel-app/explore-world/pexels-binyamin-mellish-186077_cbirbs_ncjpt0.jpg",
                    },
                    {
                        title: "Comfort Space",
                        city: "Jerusalem",
                        country: "Israel",
                        price: 400,
                        "distance-from-city-center": "0.1 km",
                        rating: 4.3,
                        "amount-of-rating": 150,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528923/hotel-app/explore-world/pexels-expect-best-323780_dk5hki_hrlmks.jpg",
                    },
                ],
                trendingCities: [
                    {
                        city: "Manila",
                        price: 220,
                        rating: 5,
                        "amount-of-rating": 150,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528939/hotel-app/trending-cities/pexels-pixabay-210367_nbupkd_bphzhq.jpg",
                    },
                    {
                        city: "Frankfurt am Main",
                        price: 340,
                        rating: 4.4,
                        "amount-of-rating": 12,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528939/hotel-app/trending-cities/pexels-bruno-gla%CC%88tsch-1398003_hgtd8g_lywqss.jpg",
                    },
                    {
                        city: "San Francisco",
                        price: 105,
                        rating: 5,
                        "amount-of-rating": 98,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528939/hotel-app/trending-cities/pexels-pixabay-208745_uaspib_gjdfio.jpg",
                    },
                    {
                        city: "Washington",
                        price: 460,
                        rating: 4.8,
                        "amount-of-rating": 221,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528939/hotel-app/trending-cities/pexels-samad-ismayilov-739047_v8kum0_okrz5b.jpg",
                    },
                    {
                        city: "Seattle",
                        price: 210,
                        rating: 4.5,
                        "amount-of-rating": 1002,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528940/hotel-app/trending-cities/pexels-josh-fields-3964406_gjxosa_f8yv3q.jpg",
                    },
                    {
                        city: "Stockholm",
                        price: 130,
                        rating: 4.2,
                        "amount-of-rating": 99,
                        img: "https://res.cloudinary.com/dugybnapi/image/upload/v1666528940/hotel-app/trending-cities/pexels-pixabay-33612_km1qos_zog5kf.jpg",
                    },
                ],
            },
        };

    const featuredDestinations: FeaturedDestination[] =
        homePageData["featured-destination"];

    const bestPlace: BestPlace[] = homePageData["best-place"];

    const topTour: TopTour[] = homePageData["top-tour"];

    const exploreWorld: ExploreWorld[] = homePageData["explore-world"];

    const trendingCities: TrendingCity[] = homePageData["trending-cities"];

    return {
        props: {
            bestPlace,
            featuredDestinations,
            topTour,
            exploreWorld,
            trendingCities,
        },
    };
}

export default function Home({
    bestPlace,
    featuredDestinations,
    topTour,
    exploreWorld,
    trendingCities,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(featuredDestinations);
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
                        <BestPlacesSection bestPlace={bestPlace} />
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
                        <FeaturedDestinationsSection
                            featuredDestinations={featuredDestinations}
                        />
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
                        <TopTourSection topTour={topTour} />
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
                        <ExploreWorldSection exploreWorld={exploreWorld} />
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
                        <TrendingCitiesSection
                            trendingCities={trendingCities}
                        />
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
}
