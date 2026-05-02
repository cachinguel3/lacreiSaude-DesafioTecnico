import { render, screen } from "@testing-library/react";
import Cabecalho from "./Cabecalho";

describe("Componente Cabecalho", () => {
    it("deve renderizar a logo e os links de navegação principais", () => {
        render(<Cabecalho />);
        
        // Testa a presença da logo
        expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();
        
        // Testa se os links de navegação do Menu estão presentes
        expect(screen.getByRole("link", { name: /Quem Somos/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Ajuda/i })).toBeInTheDocument();
        
        // Testa o componente de botão entrar
        expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
    });
});