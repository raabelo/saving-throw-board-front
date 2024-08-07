import React from "react";
import Electron from "../../services/electronApi";
import { MinusIcon, StopIcon, XMarkIcon } from "@heroicons/react/24/outline";

const TitleBar: React.FC = () => {
    const handleMinimize = () => {
        Electron.api.Minimize();
    };

    const handleMaximize = () => {
        Electron.api.Maximize();
    };

    const handleClose = () => {
        Electron.api.Close();
    };

    if (!Electron.isElectron) {
        return <React.Fragment />;
    }

    return (
        <div className="flex flex-row w-full h-fit bg-gray-500">
            <div id="toolbar" className="flex-1 w-full p-1" />
            <div id="toolbar-buttons" className="flex flex-row gap-1">
                <button
                    onClick={handleMinimize}
                    className="py-1.5 px-2 hover:bg-gray-700 transition-all focus:outline-none"
                >
                    <MinusIcon className="size-4" />
                </button>
                <button
                    onClick={handleMaximize}
                    className="py-1.5 px-2 hover:bg-gray-700 transition-all focus:outline-none"
                >
                    <StopIcon className="size-4" />
                </button>
                <button
                    onClick={handleClose}
                    className="py-1.5 px-2 hover:bg-red-600 transition-all focus:outline-none"
                >
                    <XMarkIcon className="size-4" />
                </button>
            </div>
        </div>
    );
};

export default TitleBar;
