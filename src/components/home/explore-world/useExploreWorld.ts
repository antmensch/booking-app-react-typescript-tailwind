import { useQuery } from "@tanstack/react-query";

export interface ExploreWorld {
    title: string;
    city: string;
    country: string;
    price: number;
    distance: string;
    rating: number;
    votesNumber: number;
    img: string;
}

export function useExploreWorld() {
    async function getExploreWorld() {
        const data = await fetch("http://localhost:3030/explore-world").then(
            (response) => response.json()
        );
        return data;
    }

    const {
        data: exploreWorld,
        isLoading,
        isError,
    } = useQuery(["explore-world"], getExploreWorld);

    return { exploreWorld, isLoading, isError };
}
