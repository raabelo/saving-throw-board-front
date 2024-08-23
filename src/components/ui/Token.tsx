import ICharacter from "../../utils/types/ICharacter";

interface Props {
    color: string;
    character: ICharacter;
}

const Token: React.FC<Props> = ({ character, color = "green" }) => {
    return (
        <button
            type="button"
            className="relative cursor-pointer rounded-full size-full aspect-square overflow-hidden border-2"
            style={{
                borderColor: color,
            }}
        >
            <img
                src={character?.photo}
                className="size-full object-cover transition-all hover:scale-105 rounded-full"
            />
        </button>
    );
};

export default Token;
