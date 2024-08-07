// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { ipcRenderer, contextBridge } = require("electron");

/**
 * Função para garantir que o DOM esteja pronto.
 * @param condition - As condições de document.readyState para verificar.
 * @returns Uma promessa que é resolvida quando o documento estiver pronto.
 */
function domReady(condition = ["complete", "interactive"]) {
    return new Promise((resolve) => {
        if (condition.includes(document.readyState)) {
            resolve(true);
        } else {
            document.addEventListener("readystatechange", () => {
                if (condition.includes(document.readyState)) {
                    resolve(true);
                }
            });
        }
    });
}

/**
 * Funções auxiliares para manipulação segura do DOM.
 */
const safeDOM = {
    append(parent, child) {
        if (!Array.from(parent.children).find((e) => e === child)) {
            return parent.appendChild(child);
        }
        return null;
    },
    remove(parent, child) {
        if (parent && Array.from(parent.children).find((e) => e === child)) {
            return parent.removeChild(child);
        }
        return null;
    },
};

/**
 * Função para gerenciar o indicador de carregamento.
 * @returns Um objeto com métodos para adicionar e remover indicadores de carregamento.
 */
function useLoading() {
    const styleContent = `
    /* Adicione estilos para o indicador de carregamento aqui */
    `;

    const htmlContent = `
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <!-- Adicione mais pontos conforme necessário -->
    </div>
  `;

    const oStyle = document.createElement("style");
    const oDiv = document.createElement("div");

    oStyle.id = "app-loading-style";
    oStyle.innerHTML = styleContent;
    oDiv.id = "loading-to-remove";
    oDiv.className = "app-loading-wrap";
    oDiv.innerHTML = htmlContent;

    return {
        appendLoading() {
            safeDOM.append(document.head, oStyle);
            safeDOM.append(document.body, oDiv);
        },
        removeLoading() {
            safeDOM.remove(document.head, oStyle);
            safeDOM.remove(document.body, oDiv);
        },
    };
}

// Inicialize as funções de carregamento
// eslint-disable-next-line react-hooks/rules-of-hooks
const { appendLoading, removeLoading } = useLoading();
domReady().then(appendLoading);

/**
 * Exponha funções API para o processo renderer.
 */
const api = {
    sendMessage: (message) => {
        ipcRenderer.send("message", message);
    },
    Minimize: () => {
        ipcRenderer.send("minimize");
    },
    Maximize: () => {
        ipcRenderer.send("maximize");
    },
    Close: () => {
        ipcRenderer.send("close");
    },
    removeLoading: () => {
        removeLoading();
    },
    on: (channel, callback) => {
        ipcRenderer.on(channel, (_, data) => callback(data));
    },
};

// Exponha a API para o processo renderer
contextBridge.exposeInMainWorld("electron", api);
