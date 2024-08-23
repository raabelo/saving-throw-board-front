// import { useNavigate } from "react-router-dom";
import ICharacter from "../../utils/types/ICharacter";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    char: ICharacter;
}

const CharSelect: React.FC<Props> = ({ char, ...props }) => {
    const highestLevelClass = char.classes.reduce((max, current) => {
        return current.level > max.level ? current : max;
    }, char.classes[0]);

    return (
        <div {...props} className="flex flex-col text-center max-w-[10svw]">
            <button
                type="button"
                className="size-[10svw] mb-2 cursor-pointer rounded-full aspect-square overflow-hidden hover:border-2 border-white"
            >
                <img src={char.photo} className="size-full object-cover transition-all hover:scale-105 rounded-full" />
            </button>
            <p className="font-bold">{char.name}</p>
            <p className="text-sm">{`${highestLevelClass.name} • lvl ${highestLevelClass.level}${
                char.classes.length > 1 ? "+" : ""
            }`}</p>
            <p className="text-sm">{char.race}</p>
        </div>
    );
};

export default CharSelect;
