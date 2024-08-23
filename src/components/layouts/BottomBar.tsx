import { useRef, useState } from "react";
import { DiceHandle } from "../layouts/Dice";
import React, { useContext } from "react";
import ICharacter from "../../utils/types/ICharacter";
import { SessionContext } from "../../contexts/SessionContext";
import { FaDiceD20 } from "react-icons/fa";
import DiceRoller from "./DiceRoller";

interface Props {
    character: ICharacter;
}

const BottomBar: React.FC<Props> = ({ character }) => {
    const diceRef = useRef<DiceHandle>(null);
    const { setLog } = useContext(SessionContext);
    const [isRolling, setIsRolling] = useState<boolean>(false);

    const rollDice = () => {
        setIsRolling(true);
        const cd = 2000;
        const result = diceRef.current?.startRoll(cd);
        setTimeout(() => {
            setLog((state) => [...state, `Fabiano tirou ${result}`]);
            setTimeout(() => {
                setIsRolling(false);
            }, 1000);
        }, cd);
    };

    return (
        <div className={`absolute w-full flex justify-center bottom-[1rem]`}>
            <div className={`${!isRolling ? "hidden" : ""}`}>{<DiceRoller diceRef={diceRef} />}</div>
            <div className="min-w-[30%] w-fit bg-black/55 rounded-full  p-[0.5svw] flex flex-row items-center justify-between">
                <button
                    type="button"
                    className="size-[4svw] cursor-pointer rounded-full aspect-square overflow-hidden hover:border-2 border-white"
                >
                    <img
                        src={character?.photo}
                        className="size-full object-cover transition-all hover:scale-105 rounded-full"
                    />
                </button>

                <button onClick={() => rollDice()}>
                    <FaDiceD20 />
                </button>
            </div>
        </div>
    );
};
export default BottomBar;
