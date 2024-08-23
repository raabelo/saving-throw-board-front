import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export interface BoardHandle {
    updateCell: (row: number, col: number, content: React.ReactNode) => void;
    getCell: (row: number, col: number) => React.ReactNode;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    offset: { x: number; y: number };
    scale: number;
    rows?: number;
    cols?: number;
    gridSize?: number;
    onCellClick?: (row: number, col: number) => void;
}

const TableBoard = forwardRef<BoardHandle, Props>(function TableBoard(
    { imageSrc, offset, scale, rows = 21, cols = 37, gridSize = 26, onCellClick, ...props },
    ref
) {
    const [cells, setCells] = useState<React.ReactNode[][]>(
        Array.from({ length: rows }, () => Array.from({ length: cols }, () => null))
    );

    useEffect(() => {
        setCells(Array.from({ length: rows }, () => Array.from({ length: cols }, () => null)));
    }, [rows, cols]);

    useImperativeHandle(ref, () => ({
        getCell: (row: number, col: number): React.ReactNode => {
            return cells[row][col];
        },
        updateCell: (row: number, col: number, content: React.ReactNode) => {
            setCells((prevCells) => {
                const newCells = [...prevCells];
                newCells[row] = [...newCells[row]];
                newCells[row][col] = content;
                return newCells;
            });
        },
    }));

    const handleCellClick = (row: number, col: number) => {
        if (onCellClick) {
            onCellClick(row, col);
        }
    };

    return (
        <div
            {...props}
            className="relative w-full h-full flex"
            style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                transformOrigin: "0 0",
            }}
        >
            <img
                id="table-board"
                src={imageSrc}
                alt="Tabletop"
                className="absolute object-contain top-1/2 left-1/2"
                style={{
                    transform: "translate(-50%, -50%)",
                    width: `${gridSize * cols}px`,
                    height: `${gridSize * rows}px`,
                }}
            />
            <div
                id="table-grid"
                className="absolute grid object-contain top-1/2 left-1/2"
                style={{
                    transform: "translate(-50%, -50%)",
                    gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
                    gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
                }}
            >
                {cells.flat().map((cell, index) => {
                    const row = Math.floor(index / cols);
                    const col = index % cols;
                    return (
                        <div
                            key={index}
                            className="border border-gray-400/75"
                            style={{
                                width: `${gridSize}px`,
                                height: `${gridSize}px`,
                            }}
                            onClick={() => handleCellClick(row, col)} // Adiciona o manipulador de clique
                        >
                            {cell}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default TableBoard;
