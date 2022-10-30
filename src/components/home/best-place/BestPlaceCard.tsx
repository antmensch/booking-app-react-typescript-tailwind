import React from "react";
import Image from "next/image";
import { BestPlace } from "./useBestPlace";

function BestPlaceCard({ img, country, destinations }: BestPlace) {
    return (
        <div className="cursor-pointer rounded-lg border-2 border-solid border-lightGray-400 p-4 hover:scale-105 hover:bg-white hover:transition-all dark:border-darkGray-600 dark:hover:bg-darkGray-300 md:p-8">
            <Image
                src={img}
                width="80px"
                height="80px"
                className="rounded-lg"
            />

            <div className="text-xl font-bold text-darkGray-600 dark:text-lightGray-400">
                {country}
            </div>
            <div className="text-sm text-lightGray-100">
                {destinations} destinations
            </div>
        </div>
    );
}

export default BestPlaceCard;
