import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="size-full bg-blue-400">
            <p>home</p>
            <a onClick={() => navigate("/login")}>navigate</a>
        </div>
    );
};

export default Home;
