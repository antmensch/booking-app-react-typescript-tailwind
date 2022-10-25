/** @type {import('tailwindcss').Config}  */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            dmsans: "'DM Sans', sans-serif",
            opensans: "'Open Sans', sans-serif",
            poppins: "'Poppins', sans-serif",
            roboto: "'Roboto', sans-serif",
        },
        colors: {
            darkGray: {
                100: "#18191B",
                200: "#141416",
                300: "#222529",
                400: "#23262F",
                500: "#282832",
                600: "#3B3E44",
                700: "#4A4E54",
            },
            lightGray: {
                100: "#84878B",
                200: "#92929A",
                300: "#B1B5C3",
                400: "#E7ECF3",
                500: "#F4F5F6",
                600: "#FCFCFD",
                700: "#FAFAFA",
                800: "#f5f5f5",
                900: "#777E90",
                1000: "#FCFCFD",
            },
            blue: {
                accent: "#316BFF",
                dark: "#0047FD",
                transparent: "#316BFF33",
            },
            white: "#fff",
            black: "#000",
            transparentDark: "#14141633",
            redPrimary: "#FF543D",
            starGold: "#FFD166",
            modalBg: "#36363696",
        },
        extend: {},
    },
    plugins: [],
    darkMode: "class",
};
