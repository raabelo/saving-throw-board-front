// import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import LogoWhite from "../assets/logos/text-white-saving-throw.png";

import RandomChar1 from "../assets/random/random-character-1.jpg";
import RandomChar2 from "../assets/random/random-character-2.jpg";
import CharSelect from "../components/layouts/CharSelect";
import ICharacter from "../utils/types/ICharacter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CharContext } from "../contexts/CharContext";

const chars: ICharacter[] = [
    {
        name: "Reduvio",
        classes: [
            { name: "Rogue", level: 6 },
            { name: "Mage", level: 1 },
        ],
        race: "Kenku",
        photo: RandomChar1,
    },
    {
        name: "Eleonora",
        classes: [{ name: "Wizard", level: 6 }],
        race: "Eladrin",
        photo: RandomChar2,
    },
];

const CharacterSelection: React.FC = () => {
    const navigate = useNavigate();
    const { setCharacter } = useContext(CharContext);

    return (
        <div className="size-full flex flex-col justify-center items-center relative gap-[4svh] pt-[8svh]">
            <div className="size-fit w-[10svw]">
                <img src={LogoWhite} className="w-full object-cover h-auto -ml-1" />
            </div>
            <div className="flex flex-col justify-center text-center gap-[2svh]">
                <p className="font-bold text-xl">Quem você será?</p>
                <p className="text-sm">Escolha qual personagem você quer interpretar</p>
            </div>
            <div className="flex flex-row justify-center w-[80svw] overflow-x-auto gap-[4svw] px-[4svw] pt-[2svh] pb-[6svh] mb-auto">
                {chars.slice(0, 4).map((char) => (
                    <CharSelect
                        onClick={() => {
                            setCharacter(char);
                            navigate("/session");
                        }}
                        char={char}
                    />
                ))}
                <div className="flex flex-col max-w-[10svw] text-center">
                    <button
                        type="button"
                        className="size-[10svw] bg-gray-600 rounded-full mb-2 overflow-hidden hover:border border-white cursor-pointer"
                    >
                        <div className="size-full  flex justify-center items-center hover:scale-125 transition-all  rounded-full">
                            <PlusIcon className="size-[2svw] text-white" />
                        </div>
                    </button>
                    <p className="font-bold">{"Criar novo personagem"}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterSelection;
