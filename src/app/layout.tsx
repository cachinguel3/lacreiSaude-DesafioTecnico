import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Lacrei Saúde é um aplicativo de saúde voltado para a comunidade LGBTQIA+. Ele oferece recursos e informações para promover o bem-estar e a saúde dessa comunidade, incluindo dicas de cuidados, acesso a profissionais de saúde especializados e uma plataforma de suporte. O objetivo do Lacrei Saúde é criar um ambiente seguro e inclusivo para que as pessoas possam cuidar de sua saúde de forma eficaz e sem preconceitos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans flex min-h-screen flex-col">
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
