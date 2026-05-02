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
      <main className="flex flex-1 flex-col items-center justify-center p-6 sm:p-12">
         <div className="flex w-full max-w-xs flex-col gap-4 sm:max-w-sm">
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
         </div>
         <div 
            aria-live="polite" 
            className={`fixed bottom-6 left-6 right-6 z-50 text-center sm:bottom-8 sm:left-auto sm:right-8 sm:text-left rounded-lg bg-emerald-900 px-6 py-3 font-medium text-white shadow-xl transition-opacity duration-300 ${feedbackMsg ? "opacity-100" : "opacity-0 pointer-events-none"}`}
         >
            {feedbackMsg}
         </div>
      </main>
   );
}
