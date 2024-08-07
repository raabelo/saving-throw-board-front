import TitleBar from "./components/layouts/TitleBar";
import RoutesWrapper from "./routes/routes";

function App() {
    return (
        <div className="size-full">
            <TitleBar />
            <RoutesWrapper />
        </div>
    );
}

export default App;
