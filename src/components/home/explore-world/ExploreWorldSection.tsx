import ExploreWorldCard from "./ExploreWorldCard";

export interface ExploreWorld {
    title: string;
    city: string;
    country: string;
    price: number;
    distance: string;
    rating: number;
    votesNumber: number;
    img: string;
}

export function ExploreWorldSection({
    exploreWorld,
}: {
    exploreWorld: ExploreWorld[];
}) {
    return (
        <div className="flex flex-row flex-nowrap justify-between space-x-4 overflow-scroll px-2 py-3">
            {exploreWorld.map((card: any) => (
                <ExploreWorldCard
                    key={card.title.concat(card.country)}
                    title={card.title}
                    city={card.city}
                    country={card.country}
                    price={card.price}
                    distance={card["distance-from-city-center"]}
                    rating={card.rating}
                    votesNumber={card["amount-of-rating"]}
                    img={card.img}
                />
            ))}
        </div>
    );
}
