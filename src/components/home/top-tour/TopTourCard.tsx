import Image from "next/image";
import { TopTour } from "./useTopTour";

function TopTourCard({ img, country, place, placesQty }: TopTour) {
    return (
        <div className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-xl">
            <Image src={img} layout="fill" objectFit="cover" />
            <div className="absolute top-8 left-8 rounded-full bg-transparentDark px-6 py-2 text-xl font-medium text-white">
                {country}
            </div>
            <div className="absolute bottom-8 left-8 ">
                <h5 className="text-4xl font-bold text-white">{place}</h5>
                <p className="mt-2 font-normal text-white">{`${placesQty} popular places`}</p>
            </div>
        </div>
    );
}

export default TopTourCard;
