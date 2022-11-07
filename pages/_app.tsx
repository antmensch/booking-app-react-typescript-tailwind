import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../src/components/header/Header";
import useColorTheme from "../src/hooks/useColorTheme";

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    const { colorTheme, setColorTheme } = useColorTheme();
    return (
        <div className={colorTheme}>
            <div id="modal-root" className={colorTheme}></div>
            <QueryClientProvider client={queryClient}>
                <Header colorTheme={colorTheme} setColorTheme={setColorTheme} />
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default MyApp;
