import { useContext } from "react";
import { SessionContext } from "../../../contexts/SessionContext";

const Logs: React.FC = () => {
    const { log } = useContext(SessionContext);

    return (
        <div className="p-4 h-auto max-h-[90svh] overflow-y-auto">
            <p className="text-sm font-bold">Inicio da sessão</p>
            {log.map((msg) => (
                <p className="text-sm">{msg}</p>
            ))}
        </div>
    );
};

export default Logs;
