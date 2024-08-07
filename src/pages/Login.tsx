import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="size-full bg-red-400">
            <p>login</p>
            <a onClick={() => navigate("/home")}>navigate</a>
        </div>
    );
};

export default Login;
