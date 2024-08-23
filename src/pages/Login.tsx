import Button from "../components/ui/Button";
import LogoWhite from "../assets/logos/text-white-saving-throw.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate("/");
        console.log("in");
    };
    const handleSignup = () => {
        console.log("up");
    };
    const handleForgotPass = () => {
        console.log("up");
    };

    return (
        <div className="size-full flex justify-center items-center relative">
            <div className="flex flex-col justify-center items-center w-[27.33%] gap-10">
                <div className="size-fit w-1/3">
                    <img src={LogoWhite} className="w-full object-cover h-auto -ml-1" />
                </div>

                <form className="flex flex-col gap-4 bg-gray-custom-100 rounded-lg p-10 w-full items-center justify-center">
                    <p className="font-bold text-xl">Login</p>
                    <div></div>
                    <div className="w-full flex flex-col justify-center">
                        <Button variant="default" onClick={handleSignin}>
                            <p>Conecte-se</p>
                        </Button>
                        <p className="text-center text-sm">ou</p>
                        <Button variant="outlined" onClick={handleSignup}>
                            <p>Crie sua conta</p>
                        </Button>
                        <Button variant="text" onClick={handleForgotPass}>
                            <p className="text-sm">Esqueci minha senha</p>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
