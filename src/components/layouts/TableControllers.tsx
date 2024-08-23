import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowPathIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    MagnifyingGlassMinusIcon,
    MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import { SetStateAction } from "react";

interface Props {
    setScale: React.Dispatch<SetStateAction<number>>;
    setOffset: React.Dispatch<SetStateAction<{ x: number; y: number }>>;
}

const TableControllers: React.FC<Props> = ({ setScale, setOffset }) => {
    const resetView = () => {
        setScale(1);
        setOffset({ x: 0, y: 0 });
    };

    const zoomIn = () => {
        setScale((prevScale) => Math.min(prevScale * 1.1, 10)); // Limit max zoom level
    };

    const zoomOut = () => {
        setScale((prevScale) => Math.max(prevScale * 0.9, 0.1)); // Limit min zoom level
    };

    const moveCamera = (direction: string) => {
        const step = 50; // Amount of pixels to move
        setOffset((prevOffset) => {
            switch (direction) {
                case "left":
                    return { x: prevOffset.x + step, y: prevOffset.y };
                case "right":
                    return { x: prevOffset.x - step, y: prevOffset.y };
                case "up":
                    return { x: prevOffset.x, y: prevOffset.y + step };
                case "down":
                    return { x: prevOffset.x, y: prevOffset.y - step };
                default:
                    return prevOffset;
            }
        });
    };

    return (
        <>
            <div className="flex flex-col absolute bottom-[1rem] left-[1rem] z-10">
                <button
                    onClick={() => moveCamera("up")}
                    className="rounded-full aspect-square p-[0.3svw] bg-black/50 pl-[0.3svw] flex justify-center ml-[30%] size-fit"
                >
                    <ArrowUpIcon className="w-[0.75svw] text-white" />
                </button>
                <div className="flex gap-3">
                    <button onClick={() => moveCamera("left")} className="rounded-full p-[0.3svw] bg-black/50 size-fit">
                        <ArrowLeftIcon className="w-[0.75svw] text-white" />
                    </button>
                    <button
                        onClick={() => moveCamera("right")}
                        className="rounded-full p-[0.3svw] bg-black/50 size-fit"
                    >
                        <ArrowRightIcon className="w-[0.75svw] text-white" />
                    </button>
                </div>
                <button
                    onClick={() => moveCamera("down")}
                    className="rounded-full aspect-square p-[0.3svw] bg-black/50 pl-[0.3svw] flex justify-center ml-[30%] size-fit"
                >
                    <ArrowDownIcon className="w-[0.75svw] text-white" />
                </button>
            </div>
            <div className="flex flex-col-reverse absolute bottom-[1rem] right-[1rem] w-[1.75svw] gap-1 z-10">
                <button onClick={resetView} className="rounded-full aspect-square p-[0.3svw] bg-black/50 ">
                    <ArrowPathIcon />
                </button>
                <button onClick={zoomOut} className=" rounded-full aspect-square p-[0.3svw] bg-black/50 ">
                    <MagnifyingGlassMinusIcon />
                </button>
                <button onClick={zoomIn} className=" rounded-full aspect-square p-[0.3svw] bg-black/50 ">
                    <MagnifyingGlassPlusIcon />
                </button>
            </div>
        </>
    );
};

export default TableControllers;
