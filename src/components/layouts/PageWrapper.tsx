import { useContext, useState } from "react";
import TableTools from "./TableTools";
import { CharContext } from "../../contexts/CharContext";
import Electron from "../../services/electronApi";
import SideMenu from "./SideMenu";
import BottomBar from "./BottomBar";
// import { useNavigate } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    tools?: boolean;
}

const PageWrapper: React.FC<Props> = ({ tools = true, ...props }) => {
    // const navigate = useNavigate();
    const { character } = useContext(CharContext);
    const [isToolsOpen, setIsToolsOpen] = useState<boolean>(true);

    return (
        <div className="size-full bg-gray-950 flex flex-row">
            <div className="w-[5svw] h-full">
                <SideMenu />
            </div>
            <div className={`flex-1 h-full bg-gray-custom-200 relative ${Electron.isElectron ? "rounded-tl-xl" : ""}`}>
                {/* <div className="absolute top-[2svh]"></div> */}
                {props.children}
                {character && <BottomBar character={character} />}
            </div>
            {tools && <TableTools isOpen={isToolsOpen} setIsOpen={setIsToolsOpen} />}
        </div>
    );
};

export default PageWrapper;
