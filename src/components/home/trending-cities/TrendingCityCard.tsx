import React from "react";
import { TrendingCity } from "./TrendingCitiesSection";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

function TrendingCityCard({ city, price, rating, votes, img }: TrendingCity) {
    return (
        <div className="flex h-52 w-full flex-row items-center rounded-2xl bg-white p-6 shadow-md dark:bg-darkGray-300">
            <div className="relative mr-4 h-44 w-44 overflow-hidden rounded-2xl">
                <Image src={img} layout="fill" objectFit="cover" />
            </div>
            <div className="flex h-44 flex-col justify-between">
                <h5 className="text-2xl font-bold text-darkGray-500 dark:text-lightGray-1000">
                    {city}
                </h5>
                <p className="flex flex-row items-center space-x-1">
                    <AiFillStar className="text-starGold" />
                    <span className=" text-sm font-medium text-darkGray-600 dark:text-lightGray-400">
                        {rating.toFixed(2)}
                    </span>
                    <span className="text-sm text-lightGray-100 dark:text-lightGray-400">
                        {`(${votes})`}
                    </span>
                </p>
                <p>
                    <span className="text-lg font-semibold text-darkGray-600 dark:text-lightGray-500">{`$${price.toFixed(
                        2
                    )}`}</span>
                    <span className="text-lightGray-200">/night</span>
                </p>
                <button className=" w-24 rounded-md bg-blue-accent py-1 font-bold text-white">
                    Book now
                </button>
            </div>
        </div>
    );
}

export default TrendingCityCard;
