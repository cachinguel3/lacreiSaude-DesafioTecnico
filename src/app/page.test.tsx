import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

// Mock do hook useRouter nativo do Next.js (App Router)
jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe("Página Inicial (Conteúdo Interativo)", () => {
    it("deve renderizar os três botões interativos principais", () => {
        render(<Home />);
        expect(screen.getByRole("button", { name: /Navegar para a página Quem Somos/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Adicionar aos Favoritos/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Confirmar Ação/i })).toBeInTheDocument();
    });

    it("deve alternar o texto e o estado de pressionado (aria-pressed) no botão de favoritos", async () => {
        render(<Home />);
        const favButton = screen.getByRole("button", { name: /Adicionar aos Favoritos/i });
        
        expect(favButton).toHaveAttribute("aria-pressed", "false");
        
        // Simula clique do usuário
        await userEvent.click(favButton);
        
        expect(screen.getByRole("button", { name: /Remover dos Favoritos/i })).toHaveAttribute("aria-pressed", "true");
    });

    it("deve exibir a mensagem de Toast dinâmico ao confirmar ação", async () => {
        render(<Home />);
        const actionButton = screen.getByRole("button", { name: /Confirmar Ação/i });
        
        await userEvent.click(actionButton);
        
        // O Toast deve ter a classe que o torna visível (opacity-100) após clicar
        expect(screen.getByText("Ação confirmada com sucesso!")).toHaveClass("opacity-100");
    });
});