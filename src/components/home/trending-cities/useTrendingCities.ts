import { useQuery } from "@tanstack/react-query";

export interface TrendingCity {
    city: string;
    price: number;
    rating: number;
    votes: number;
    img: string;
}

export function useTrendingCities() {
    async function getTrendingCities() {
        const data = await fetch(" http://localhost:3030/trending-cities").then(
            (response) => response.json()
        );

        return data;
    }

    const { data, isLoading, isError } = useQuery(
        ["trending-cities"],
        getTrendingCities
    );

    return { data, isLoading, isError };
}
