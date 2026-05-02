"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao/Botao";

export default function Home() {
   const router = useRouter();
   const [isFavorite, setIsFavorite] = useState(false);
   const [feedbackMsg, setFeedbackMsg] = useState("");

   const handleNavigation = () => router.push("/QuemSomos");
   const handleToggle = () => setIsFavorite(!isFavorite);
   const handleAction = () => {
      setFeedbackMsg("Ação confirmada com sucesso!");
      // Remove a mensagem após 3 segundos
      setTimeout(() => setFeedbackMsg(""), 3000);
   };

   return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
         <Botao onClick={handleNavigation} aria-label="Navegar para a página Quem Somos">
            Conhecer a Lacrei
         </Botao>
         <Botao 
            variant="secondary" 
            icon={isFavorite ? "★" : "☆"} 
            iconPosition="right" 
            onClick={handleToggle}
            aria-pressed={isFavorite}
         >
            {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
         </Botao>
         <Botao variant="primary" icon="✓" iconPosition="left" onClick={handleAction}>
            Confirmar Ação
         </Botao>
         <div aria-live="polite" className="sr-only">
            {feedbackMsg}
         </div>
      </main>
   );
}
