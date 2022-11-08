import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../src/components/header/Header";
import useColorTheme from "../src/hooks/useColorTheme";
import { SessionProvider } from "next-auth/react";

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
    const queryClient = new QueryClient();
    const { colorTheme, setColorTheme } = useColorTheme();
    return (
        <>
            <div className={colorTheme}>
                <div id="modal-root" className={colorTheme}></div>
                <QueryClientProvider client={queryClient}>
                    <SessionProvider session={session}>
                        <Header
                            colorTheme={colorTheme}
                            setColorTheme={setColorTheme}
                        />
                        <Component {...pageProps} />
                        <ReactQueryDevtools />
                    </SessionProvider>
                </QueryClientProvider>
            </div>
        </>
    );
}

export default MyApp;
