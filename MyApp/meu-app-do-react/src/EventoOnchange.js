import Botao from "./botao";
import React, { useState } from "react";

const Alterbotao = () => {
    const [BotaoTexto, setaNomeBotao] = useState('clique aqui se quiser');

    const handClick = () => {
        setaNomeBotao(Prevtext => (Prevtext === 'clique aqui' ? 'clicou ?' : 'clica aqui'));

    }
    return (
        <button variant="sucesso" onClick={handClick}>
            {BotaoTexto}
        </button>
    )
};