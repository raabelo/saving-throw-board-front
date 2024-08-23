import React, { ReactElement } from "react";
import Electron from "../../services/electronApi";
import { MinusIcon, StopIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonTitleBar from "../ui/ButtonTitleBar";
import LogoWhite from "../../assets/logos/text-white-saving-throw.png";

type IButton = { title: string; icon: ReactElement; action: () => void; className?: string };

const TitleBar: React.FC = () => {
    const buttons: IButton[] = [
        {
            title: "Minimize",
            icon: <MinusIcon className="size-4" />,
            action: () => {
                Electron.api.Minimize();
            },
        },
        {
            title: "Maximize",
            icon: <StopIcon className="size-4" />,
            action: () => {
                Electron.api.Maximize();
            },
        },
        {
            title: "Close",
            icon: <XMarkIcon className="size-4" />,
            action: () => {
                Electron.api.Close();
            },
            className: "hover:bg-red-600",
        },
    ];

    if (!Electron.isElectron) {
        return <React.Fragment />;
    }

    return (
        <div className="flex flex-row w-full h-fit bg-gray-950">
            <div id="toolbar" className="flex-1 w-full p-1">
                <img src={LogoWhite} className="h-5 object-cover w-auto ml-1" />
            </div>
            <div id="toolbar-buttons" className="flex flex-row gap-1">
                {buttons.map((item) => {
                    return (
                        <ButtonTitleBar className={item.className} onClick={item.action}>
                            {item.icon}
                        </ButtonTitleBar>
                    );
                })}
            </div>
        </div>
    );
};

export default TitleBar;
