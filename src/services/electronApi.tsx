import IElectron from "../utils/types/IElectron";

type ElectronClass = {
    api: IElectron;
    isElectron: boolean;
};

const isElectron = (): boolean => {
    const res = typeof window !== "undefined" && window.electron !== undefined;
    if (res && !window.electron) {
        throw new Error("Electron not found");
    }
    return res;
};

const Electron: ElectronClass = { api: window.electron as unknown as IElectron, isElectron: isElectron() };

export default Electron;
