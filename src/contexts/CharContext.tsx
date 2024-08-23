import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import ICharacter from "../utils/types/ICharacter";

export const CharContext = createContext<{
    character: ICharacter | null;
    setCharacter: Dispatch<SetStateAction<ICharacter | null>>;
}>({
    character: null,
    setCharacter: () => null,
});

const CharProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [character, setCharacter] = useState<ICharacter | null>(null);

    return <CharContext.Provider value={{ character, setCharacter }}>{children}</CharContext.Provider>;
};

export default CharProvider;
