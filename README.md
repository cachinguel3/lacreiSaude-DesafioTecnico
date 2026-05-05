# Lacrei Saúde - Desafio Técnico (Frontend)

Este repositório contém a solução para o desafio técnico da Lacrei Saúde, focado no desenvolvimento de uma interface acessível, performática e responsiva, utilizando o que há de mais moderno no ecossistema React.

## 🚀 Tecnologias Utilizadas

- **Next.js (v16.2.4)**: Framework React (App Router) com foco em Server Components.
- **React (v19.2.4)**: Biblioteca de construção de interfaces de usuário.
- **Tailwind CSS (v4)**: Estilização utilitária e desenvolvimento ágil com foco em *Mobile-First*.
- **TypeScript**: Tipagem estática para maior segurança e previsibilidade do código.
- **Jest (v30.3.0) & React Testing Library**: Para testes unitários de componentes e interatividade.

---

## 🛠️ Instruções para rodar o projeto localmente

Pré-requisitos: Ter o Node.js (versão 18 ou superior) instalado em sua máquina.

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd lacrei-saude
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📦 Instruções para Build e Deploy

Para criar uma versão de produção otimizada na sua máquina, execute:
```bash
npm run build
npm run start
```

**Deploy na Vercel (Recomendado):**
A plataforma Vercel foi criada pelos criadores do Next.js, oferecendo a infraestrutura ideal para este projeto.
1. Crie uma conta ou faça login na [Vercel](https://vercel.com).
2. Importe este repositório do seu GitHub.
3. A Vercel detectará as configurações do Next.js automaticamente. Clique em **Deploy**.
4. Em minutos, seu site estará no ar com uma URL pública e SSL ativado.

---

## 🔄 Proposta de Rollback (Simples e Funcional)

A Vercel fornece ferramentas excelentes que garantem a segurança do ambiente de produção. Nossa estratégia de rollback funcional baseia-se nestes dois conceitos:

1. **Preview Deploys (Prevenção):** Ao abrir um Pull Request (PR) com uma nova feature, a Vercel gera um ambiente de *Preview*. A equipe pode validar o layout, realizar testes de performance e acessibilidade nesse link exclusivo antes de integrar as alterações na `main`. Isso reduz a taxa de falhas em produção.
2. **Instant Rollback (Recuperação):** Se, por acaso, um bug crítico chegar à produção, nós acessamos a aba **Deployments** no painel (dashboard) da Vercel no projeto, procuramos a compilação anterior (que estava estável), clicamos nos três pontos e em seguida na opção **Promote to Production** (ou Rollback). A reversão do tráfego para a versão anterior ocorre em segundos, sem tempo de inatividade (Downtime).

---

## 🧪 Registro dos Testes Aplicados

Foram desenvolvidos testes unitários utilizando o **Jest** para garantir a estabilidade e a acessibilidade da interface. Para executá-los, rode o comando `npm run test` ou `npm run test:watch`.

- `Botao.test.tsx`: Verifica a renderização, a repassagem dinâmica de propriedades ARIA (`aria-label`, `aria-pressed`) e atesta se as funções de `onClick` estão sendo disparadas adequadamente.
- `Cabecalho.test.tsx`: Garante a montagem e a visibilidade de elementos estruturais da navegação principal, logo e botão de acesso.
- `page.test.tsx`: Testa os fluxos interativos exigidos no desafio, certificando que:
  - A funcionalidade de alteração de *state* altera corretamente o ARIA de estado pressionado do botão.
  - A confirmação de uma ação dispara uma mensagem exibida via sistema de *Toast*, atestando se a opacidade é manipulada corretamente para visibilidade visual.

---

## 🎨 Justificativas Visuais e Técnicas

### Acessibilidade como Pilar (A11y)
- O projeto utiliza extensamente **HTML semântico** (`<main>`, `<header>`, `<footer>`, `<nav>`, `<details>`, etc.) permitindo navegação rápida e interpretativa por leitores de tela como NVDA e VoiceOver.
- **ARIA Dinâmico:** Os botões foram munidos de atributos de estado (`aria-pressed`), dicas invisíveis para botões apenas com ícone (`aria-label`) e exclusão de caracteres ruidosos no leitor (`aria-hidden="true"`).
- **Aviso Ativo (Toast):** As mensagens de confirmação da Home utilizam `aria-live="polite"` para garantir que pessoas cegas ouçam a notificação imediata do sucesso da ação, paralelamente com uma animação limpa em tela.

### Decisões Técnicas e de Performance
- A aplicação tira o máximo proveito de **Server Components** no Next.js (arquivos sem `"use client"`). Componentes apenas de apresentação não enviam JavaScript para o cliente, resultando num arquivo muito pequeno, rápido Time to Interactive (TTI) e pontuação de Performance superior a 90 no Lighthouse. O isolamento do `"use client"` foi feito meticulosamente nos nós das árvores estritamente necessários (ex: apenas no componente do botão e não na página toda).
- O **Tailwind CSS** nos possibilitou criar o layout de ponta a ponta focado em responsividade (*Mobile-First*), mantendo total respeito e fidelidade às cores institucionais e acessíveis da Lacrei Saúde (o alto contraste entre verde `emerald-900` e fundos claros `slate-50`).