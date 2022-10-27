import { useEffect, useState } from "react";

export default function useColorTheme() {
    const [colorTheme, setTheme] = useState<"dark" | "light">("light");

    useEffect(() => {
        const storedColorTheme = localStorage.getItem("colorTheme") || "light";
        if (storedColorTheme) setTheme(storedColorTheme as "dark" | "light");
    }, []);

    const setColorTheme = (theme: "dark" | "light") => {
        setTheme(theme);
        localStorage.setItem("colorTheme", theme);
    };
    return { colorTheme, setColorTheme };
}
