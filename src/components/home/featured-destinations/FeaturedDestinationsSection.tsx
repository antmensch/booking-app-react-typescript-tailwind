import { InferGetStaticPropsType } from "next";
import FeaturedDestinationCard from "./FeaturedDestinationCard";

export async function getStaticProps() {
    async function getFeaturedDestinations() {
        const data = await fetch(
            "http://localhost:3030/featured-destinations"
        ).then((response) => response.json());

        return data;
    }
    const featuredDestinations: FeaturedDestination[] =
        await getFeaturedDestinations();

    return {
        props: {
            featuredDestinations,
        },
    };
}

export interface FeaturedDestination {
    img: string;
    city: string;
    country: string;
    rating: number;
    activities: number;
}

export function FeaturedDestinationsSection({
    featuredDestinations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="grid grid-rows-featured-6 gap-4 py-4 px-4 md:grid-flow-row md:grid-cols-8 md:grid-rows-12-40 md:px-0">
            <div className="md:col-span-6 md:row-span-5">
                <FeaturedDestinationCard
                    img={featuredDestinations[0].img}
                    country={featuredDestinations[0].country}
                    city={featuredDestinations[0].city}
                    rating={featuredDestinations[0].rating}
                    activities={featuredDestinations[0].activities}
                />
            </div>
            <div className="md:col-span-2 md:row-span-4">
                <FeaturedDestinationCard
                    img={featuredDestinations[1].img}
                    country={featuredDestinations[1].country}
                    city={featuredDestinations[1].city}
                    rating={featuredDestinations[1].rating}
                    activities={featuredDestinations[1].activities}
                />
            </div>
            <div className="md:col-span-2 md:row-span-4">
                <FeaturedDestinationCard
                    img={featuredDestinations[2].img}
                    country={featuredDestinations[2].country}
                    city={featuredDestinations[2].city}
                    rating={featuredDestinations[2].rating}
                    activities={featuredDestinations[2].activities}
                />
            </div>
            <div className="md:col-span-3 md:row-span-7">
                <FeaturedDestinationCard
                    img={featuredDestinations[3].img}
                    country={featuredDestinations[3].country}
                    city={featuredDestinations[3].city}
                    rating={featuredDestinations[3].rating}
                    activities={featuredDestinations[3].activities}
                />
            </div>
            <div className="md:col-span-3 md:row-span-7">
                <FeaturedDestinationCard
                    img={featuredDestinations[4].img}
                    country={featuredDestinations[4].country}
                    city={featuredDestinations[4].city}
                    rating={featuredDestinations[4].rating}
                    activities={featuredDestinations[4].activities}
                />
            </div>
            <div className="md:col-span-2 md:row-span-4">
                <FeaturedDestinationCard
                    img={featuredDestinations[5].img}
                    country={featuredDestinations[5].country}
                    city={featuredDestinations[5].city}
                    rating={featuredDestinations[5].rating}
                    activities={featuredDestinations[5].activities}
                />
            </div>
        </div>
    );
}
