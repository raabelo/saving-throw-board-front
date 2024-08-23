import { ChatBubbleLeftEllipsisIcon, ChevronLeftIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ReactElement, SetStateAction, useState } from "react";
import Logs from "../tabs/TableTools/Logs";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
type Tabs = "logs" | "entities";

const TableTools: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const [currentTab, setCurrentTab] = useState<Tabs>("logs");
    const tabs: { [key in Tabs]: { icon: ReactElement; component: ReactElement } } = {
        logs: { icon: <ChatBubbleLeftEllipsisIcon />, component: <Logs /> },
        entities: { icon: <UsersIcon />, component: <Logs /> },
    };

    return (
        <div className={`${isOpen ? "w-[20svw]" : "w-[2svw]"} h-full transition-all`}>
            {isOpen && (
                <div className="flex flex-col">
                    <div className="flex flex-row border-b border-gray-custom-100 p-4 gap-4">
                        {Object.keys(tabs).map((item) => {
                            const tab = tabs[item as Tabs];
                            return (
                                <button
                                    onClick={() => setCurrentTab(item as Tabs)}
                                    className={`size-6 ${
                                        currentTab === (item as Tabs) ? "text-white" : "text-gray-700"
                                    }`}
                                >
                                    {tab.icon}
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex flex-col overflow-y-auto">{tabs[currentTab].component}</div>
                </div>
            )}
            <button
                onClick={() => setIsOpen((state) => !state)}
                type="button"
                className="absolute p-[0.1svw] text-white bg-gray-700 rounded-full flex justify-center items-center top-[20%] -ml-[0.5svw]"
            >
                <ChevronLeftIcon className={`size-4 transition-all ${isOpen ? "rotate-180" : ""}`} />
            </button>
        </div>
    );
};

export default TableTools;
