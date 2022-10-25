import { useState } from "react";

export default function useColorTheme() {
    const [colorTheme, setColorTheme] = useState<"dark" | "light">("light");
    return { colorTheme, setColorTheme };
}
