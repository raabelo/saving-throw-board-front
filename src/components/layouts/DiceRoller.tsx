import Dice, { DiceHandle } from "./Dice";

interface Props {
    diceRef: React.RefObject<DiceHandle>;
}
const DiceRoller: React.FC<Props> = ({ diceRef }) => {
    return (
        <div className="fixed top-[5svh] bg-black/50 p-4 aspect-square rounded-3xl">
            <Dice ref={diceRef} color="gray" />
        </div>
    );
};

export default DiceRoller;
