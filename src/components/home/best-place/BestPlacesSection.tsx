import React from "react";
import BestPlaceCard from "./BestPlaceCard";

export interface BestPlace {
    img: string;
    country: string;
    destinations: number;
}

export function BestPlacesSection({ bestPlace }: { bestPlace: BestPlace[] }) {
    //const { bestPlace, isLoading, isError } = useBestPlace();
    return (
        <div className="grid grid-cols-best-place gap-4 overflow-scroll px-5 py-5 md:grid-cols-4 md:grid-rows-2 md:gap-7 md:overflow-visible md:px-0">
            {bestPlace.map((place: BestPlace) => (
                <BestPlaceCard
                    img={place.img}
                    country={place.country}
                    destinations={place.destinations}
                    key={place.country}
                />
            ))}
        </div>
    );
}
