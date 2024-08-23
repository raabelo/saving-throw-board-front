import React, { useState, useRef, useEffect, useContext } from "react";
import TableBoard, { BoardHandle } from "./TableBoard";
import Token from "../ui/Token";
import { CharContext } from "../../contexts/CharContext";
import TableControllers from "./TableControllers";

interface Props {
    imageSrc: string;
}

const TableTop: React.FC<Props> = ({ imageSrc }) => {
    const { character } = useContext(CharContext);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState<number>(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [holdingCamera, setHoldingCamera] = useState<boolean>(false);
    const [holdingToken, setHoldingToken] = useState<{
        token: React.ReactNode;
        offset: { x: number; y: number };
    } | null>(null);

    const boardRef = useRef<BoardHandle>(null);

    const handleUpdateCell = (x: number, y: number, component: React.ReactNode) => {
        if (boardRef.current) {
            boardRef.current.updateCell(x, y, component);
        }
    };

    const handleCellClick = (row: number, col: number) => {
        if (boardRef.current) {
            if (holdingToken && holdingToken.token) {
                if (boardRef.current.getCell(row, col)) {
                    return;
                }
                handleUpdateCell(holdingToken.offset.x, holdingToken.offset.y, null);
                handleUpdateCell(row, col, holdingToken.token);
                setHoldingToken(null);
                return;
            }
            setHoldingToken({ token: boardRef.current.getCell(row, col), offset: { x: row, y: col } });
            return;
        }
    };

    useEffect(() => {
        if (character) {
            handleUpdateCell(2, 2, <Token character={character} color="#10ff20" />);
            handleUpdateCell(2, 4, <Token character={character} color="#10ff20" />);
        }
        console.log(character);
    }, [character]);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;

                const newScale = Math.max(0.1, scale + event.deltaY * -0.001);

                setOffset((prevOffset) => ({
                    x: mouseX - (mouseX - prevOffset.x) * (newScale / scale),
                    y: mouseY - (mouseY - prevOffset.y) * (newScale / scale),
                }));

                setScale(newScale);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
    }, [scale]);

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (event.button === 1) {
                // Middle mouse button
                setHoldingCamera(true);
                const startX = event.clientX;
                const startY = event.clientY;
                const startOffsetX = offset.x;
                const startOffsetY = offset.y;

                const handleMouseMove = (moveEvent: MouseEvent) => {
                    setOffset({
                        x: startOffsetX + moveEvent.clientX - startX,
                        y: startOffsetY + moveEvent.clientY - startY,
                    });
                };

                const handleMouseUp = () => {
                    setHoldingCamera(false);
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                };

                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            }
        };

        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [offset]);

    return (
        <div className="relative overflow-hidden w-full h-full">
            <div
                ref={containerRef}
                className={`relative w-full h-full overflow-hidden ${
                    holdingCamera ? "cursor-grabbing" : "cursor-default"
                }`}
            >
                <TableBoard
                    ref={boardRef}
                    imageSrc={imageSrc}
                    scale={scale}
                    offset={offset}
                    onCellClick={handleCellClick}
                />
            </div>
            <TableControllers setScale={setScale} setOffset={setOffset} />
        </div>
    );
};

export default TableTop;
