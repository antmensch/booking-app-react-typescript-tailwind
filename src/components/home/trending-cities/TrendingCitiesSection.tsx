import TrendingCityCard from "./TrendingCityCard";
import { useTrendingCities } from "./useTrendingCities";

function TrendingCitiesSection() {
    const { data: trendingCities, isLoading, isError } = useTrendingCities();
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="grid w-full grid-cols-1 gap-7 px-4 py-3 md:grid-cols-2 md:grid-rows-3 md:gap-7 md:px-2">
            {trendingCities?.map((city: any) => (
                <TrendingCityCard
                    key={city.city}
                    city={city.city}
                    price={city.price}
                    rating={city.rating}
                    votes={city["amount-of-rating"]}
                    img={city.img}
                />
            ))}
        </div>
    );
}

export default TrendingCitiesSection;
