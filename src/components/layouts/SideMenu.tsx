import { useNavigate } from "react-router-dom";
import ButtonSideMenu from "../ui/ButtonSideMenu";

type Buttons = "home";

const SideMenu: React.FC = () => {
    const navigate = useNavigate();

    const buttons: { [key in Buttons]: { target: () => void } } = {
        home: { target: () => navigate("/") },
    };

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                {Object.keys(buttons).map((item) => {
                    const button = buttons[item as Buttons];
                    return <ButtonSideMenu onClick={button.target}>{"teste"}</ButtonSideMenu>;
                })}
            </div>
            <div>
                <ButtonSideMenu>{"config"}</ButtonSideMenu>
            </div>
        </div>
    );
};
export default SideMenu;
