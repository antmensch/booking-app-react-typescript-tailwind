import React from "react";
import Image from "next/image";
import { FeaturedDestination } from "./useFeaturedDestinations";

function FeaturedDestinationCard({
    img,
    city,
    country,
    rating,
    activities,
}: FeaturedDestination) {
    return (
        <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-xl">
            <Image src={img} layout="fill" objectFit="cover" />
            <div className="absolute left-8 top-5 z-10 rounded-full bg-white px-4 text-lg font-bold text-redPrimary">
                {rating.toFixed(1)}
            </div>
            <div className="absolute left-8 bottom-4 z-10 ">
                <h5 className="text-4xl font-bold text-white">{`${city}, ${country}`}</h5>
                <div className="text-xl font-normal text-white">{`${activities} Activities`}</div>
            </div>
        </div>
    );
}

export default FeaturedDestinationCard;
