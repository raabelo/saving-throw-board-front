import { useContext } from "react";
import TitleBar from "./components/layouts/TitleBar";
import RouterManager from "./routes/routes";
import { Modal } from "@mui/material";
import { ModalContext } from "./contexts/ModalContext";
import Electron from "./services/electronApi";

function App() {
    const { modalContent, setModalContent } = useContext(ModalContext);

    return (
        <div className={`size-full bg-gray-custom-200 text-white ${Electron.isElectron ? "pb-[3.33svh]" : ""}`}>
            <TitleBar />
            <RouterManager />
            <Modal
                open={!!modalContent}
                onClose={() => setModalContent(null)}
                className="flex items-center justify-center"
            >
                <div className="size-fit rounded-2xl overflow-hidden">{modalContent}</div>
            </Modal>
        </div>
    );
}

export default App;
