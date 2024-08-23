import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export const SessionContext = createContext<{
    log: string[];
    setLog: Dispatch<SetStateAction<string[]>>;
}>({
    log: [],
    setLog: () => null,
});

const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [log, setLog] = useState<string[]>([]);

    return <SessionContext.Provider value={{ log, setLog }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
