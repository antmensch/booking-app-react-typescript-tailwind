import ExploreWorldCard from "./ExploreWorldCard";
import { useExploreWorld } from "./useExploreWorld";

function ExploreWorldSection() {
    const { exploreWorld = [], isLoading, isError } = useExploreWorld();

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

export default ExploreWorldSection;
