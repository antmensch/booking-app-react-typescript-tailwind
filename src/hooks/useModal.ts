import { useState } from "react";

export function useModal() {
    const [modalState, setModalState] = useState<"closed" | "open">("closed");

    return { modalState, setModalState };
}
