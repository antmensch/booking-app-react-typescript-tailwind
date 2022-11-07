import { useEffect, useState } from "react";

export default function useColorTheme() {
    const [colorTheme, setTheme] = useState<"dark" | "light">("light");

    useEffect(() => {
        const storedColorTheme = localStorage.getItem("colorTheme") || "light";

        if (storedColorTheme) setTheme(storedColorTheme as "dark" | "light");
    }, []);

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        if (colorTheme === "dark") html.style.backgroundColor = "#23262F";
        else html.style.backgroundColor = "#fafafa";
    }, [colorTheme]);

    const setColorTheme = (theme: "dark" | "light") => {
        setTheme(theme);
        localStorage.setItem("colorTheme", theme);
    };
    return { colorTheme, setColorTheme };
}
