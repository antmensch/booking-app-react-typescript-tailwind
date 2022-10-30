import { useQuery } from "@tanstack/react-query";

export interface BestPlace {
    img: string;
    country: string;
    destinations: number;
}

export default function useBestPlace() {
    async function getBestPlace() {
        const data = await fetch("http://localhost:3030/best-place").then(
            (result) => result.json()
        );
        return data;
    }

    const {
        data: bestPlace,
        isLoading,
        isError,
    } = useQuery(["best-place"], getBestPlace);

    return { bestPlace, isLoading, isError };
}
