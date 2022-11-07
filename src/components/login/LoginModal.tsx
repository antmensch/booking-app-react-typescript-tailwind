import { useEffect } from "react";
import { createPortal } from "react-dom";
import LoginForm from "./LoginForm";

export default function LoginModal({
    modalState,
    setModalState,
}: {
    modalState: "open" | "closed";
    setModalState: React.Dispatch<React.SetStateAction<"open" | "closed">>;
}) {
    const modalWrapper = document.getElementById("modal-root") as Element;
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") setModalState("closed");
        });
    }, []);
    return createPortal(
        <div
            className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-40"
            onClick={() => setModalState("closed")}
        >
            <div
                className="relative w-1/2 md:w-1/3"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <LoginForm />
                <div
                    className="absolute -top-2 -right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm"
                    onClick={() => setModalState("closed")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        height={24}
                        width={24}
                    >
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                    </svg>
                </div>
            </div>
        </div>,
        modalWrapper
    );
}
