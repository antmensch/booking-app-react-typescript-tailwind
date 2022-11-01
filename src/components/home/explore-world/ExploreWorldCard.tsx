import { ExploreWorld } from "./useExploreWorld";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";

function ExploreWorldCard({
    title,
    city,
    country,
    price,
    distance,
    rating,
    votesNumber,
    img,
}: ExploreWorld) {
    return (
        <div className="w-72 space-y-2 rounded-xl bg-white p-3 pb-6 dark:bg-darkGray-300">
            <div className="relative mx-auto h-36 w-60 overflow-hidden rounded-xl">
                <Image src={img} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-row items-center space-x-1">
                <AiFillStar className="text-starGold" />
                <span className=" text-sm font-medium text-darkGray-600 dark:text-lightGray-500">
                    {rating.toFixed(2)}
                </span>
                <span className="text-sm text-lightGray-100 dark:text-lightGray-300">{`(${votesNumber})`}</span>
            </div>
            <div className="flex items-center justify-between">
                <h5 className=" text-xl font-medium text-darkGray-600 dark:text-lightGray-600">
                    {title}
                </h5>
                <div className=" rounded-md bg-blue-accent px-2 py-1 text-base font-bold text-white dark:bg-blue-transparent dark:text-blue-accent">{`$${price}`}</div>
            </div>

            <div className="text-sm font-medium text-lightGray-100">{`${distance} to Town Center`}</div>
            <div className="flex flex-row items-center ">
                <IoLocationOutline className="text-xl text-lightGray-300" />
                <span className="text-sm font-normal text-lightGray-100 dark:text-lightGray-300">
                    {`${country}, ${city}`}
                </span>
            </div>
            <div className="flex flex-row items-center">
                <FaHotel className="text-md text-lightGray-300" />
                <span className="text-sm font-normal text-lightGray-100 dark:text-lightGray-300">
                    &nbsp;{`Rooms Available: 375`}
                </span>
            </div>
        </div>
    );
}

export default ExploreWorldCard;
