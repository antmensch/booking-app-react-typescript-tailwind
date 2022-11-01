import { useTopTour } from "./useTopTour";
import TopTourCard from "./TopTourCard";
import { TopTour } from "./useTopTour";

function TopTourSection() {
    const { topTour = [], isError, isLoading } = useTopTour();
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="space flex flex-col space-y-4 px-4 md:flex-row md:space-y-0 md:space-x-7 md:px-0">
            {topTour.map((tour) => (
                <TopTourCard
                    img={tour.img}
                    country={tour.country}
                    place={tour.place}
                    placesQty={tour.placesQty}
                    key={tour.place}
                />
            ))}
        </div>
    );
}

export default TopTourSection;
