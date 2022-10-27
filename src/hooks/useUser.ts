import { useQuery } from "@tanstack/react-query";

async function getUser() {
    const user = await fetch("http://localhost:3030/myuser").then((response) =>
        response.json()
    );
    return user;
}

function useUser() {
    const { data: user, isLoading } = useQuery(["user"], getUser, {});

    return { user, isLoading };
}

export default useUser;
