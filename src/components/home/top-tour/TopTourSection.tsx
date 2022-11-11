import TopTourCard from "./TopTourCard";

export interface TopTour {
    img: string;
    country: string;
    place: string;
    placesQty: number;
}

export function TopTourSection({ topTour }: { topTour: TopTour[] }) {
    return (
        <div className="space flex flex-col space-y-4 px-4 py-3 md:flex-row md:space-y-0 md:space-x-7 md:px-2">
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
