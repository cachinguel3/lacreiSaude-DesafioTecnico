import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Botao from "./Botao";

describe("Componente Botao", () => {
    it("deve renderizar o botão com o texto correto", () => {
        render(<Botao>Clique Aqui</Botao>);
        expect(screen.getByRole("button", { name: /Clique Aqui/i })).toBeInTheDocument();
    });

    it("deve repassar atributos ARIA para garantir a acessibilidade", () => {
        render(<Botao aria-label="Botão Fechar" aria-pressed={true}>X</Botao>);
        const button = screen.getByRole("button", { name: /Botão Fechar/i });
        
        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("deve disparar a função onClick quando clicado", async () => {
        const onClickMock = jest.fn();
        render(<Botao onClick={onClickMock}>Ação</Botao>);
        
        await userEvent.click(screen.getByRole("button", { name: /Ação/i }));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});