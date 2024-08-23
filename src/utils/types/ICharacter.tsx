import ICharClass from "./ICharClass";

interface ICharacter {
    name: string;
    classes: ICharClass[];
    race: string;
    photo: string;
}

export default ICharacter;
