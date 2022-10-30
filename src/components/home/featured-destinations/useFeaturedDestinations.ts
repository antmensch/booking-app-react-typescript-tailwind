import { useQuery } from "@tanstack/react-query";

export interface FeaturedDestination {
    img: string;
    city: string;
    country: string;
    rating: number;
    activities: number;
}

export function useFeaturedDestinations() {
    async function getFeaturedDestinations() {
        const data = await fetch(
            "http://localhost:3030/featured-destinations"
        ).then((response) => response.json());
        return data;
    }

    const {
        data: featuredDestinations,
        isLoading,
        isError,
    } = useQuery(["featured-destination"], getFeaturedDestinations);

    return { featuredDestinations, isLoading, isError };
}
