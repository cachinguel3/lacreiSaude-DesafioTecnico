"use client";

import Botao from "../Botao/Botao";

export default function BotaoVoltarAoTopo() {
    return (
        <Botao variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Voltar ao Topo
        </Botao>
    );
}