import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export const ModalContext = createContext<{
    modalContent: ReactNode | null;
    setModalContent: Dispatch<SetStateAction<ReactNode | null>>;
}>({
    modalContent: null,
    setModalContent: () => null,
});

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    return <ModalContext.Provider value={{ modalContent, setModalContent }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
