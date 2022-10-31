import { useQuery } from "@tanstack/react-query";

export interface TopTour {
    img: string;
    country: string;
    place: string;
    placesQty: number;
}

export function useTopTour() {
    async function getTopTour() {
        const data: TopTour[] = await fetch(
            "http://localhost:3030/top-tour"
        ).then((response) => response.json());
        return data;
    }

    const {
        data: topTour,
        isLoading,
        isError,
    } = useQuery(["top-tour"], getTopTour);

    return { topTour, isLoading, isError };
}
