export const metadata = {
    title: "Ajuda | Lacrei Saúde",
    description: "Central de Ajuda da Lacrei Saúde. Encontre respostas para as suas dúvidas.",
};

export default function Ajuda() {
    return (
        <main className="flex flex-1 flex-col items-center gap-8 p-8 sm:p-16 bg-slate-50">
            <h1 className="text-4xl font-bold text-emerald-900 text-center">Central de Ajuda</h1>
            <div className="max-w-3xl w-full space-y-6 text-slate-700">
                <section className="space-y-2 text-center mb-8">
                    <p className="text-lg">Bem-vindo à central de ajuda da Lacrei Saúde. Encontre abaixo as respostas para as dúvidas mais comuns.</p>
                </section>

                <div className="space-y-4">
                    <details className="group border border-slate-200 rounded-lg p-4 bg-white cursor-pointer focus-within:ring-2 focus-within:ring-emerald-500">
                        <summary className="font-semibold text-lg text-emerald-900 flex justify-between items-center outline-none list-none marker:hidden">
                            <span>Como agendar uma consulta?</span>
                            <span className="group-open:rotate-180 transition-transform duration-200">↓</span>
                        </summary>
                        <p className="mt-4 text-slate-600 leading-relaxed">Para agendar uma consulta, basta acessar a nossa plataforma, buscar pelo profissional desejado e escolher um horário disponível de acordo com as suas necessidades.</p>
                    </details>

                    <details className="group border border-slate-200 rounded-lg p-4 bg-white cursor-pointer focus-within:ring-2 focus-within:ring-emerald-500">
                        <summary className="font-semibold text-lg text-emerald-900 flex justify-between items-center outline-none list-none marker:hidden">
                            <span>O serviço da Lacrei Saúde é gratuito?</span>
                            <span className="group-open:rotate-180 transition-transform duration-200">↓</span>
                        </summary>
                        <p className="mt-4 text-slate-600 leading-relaxed">A busca e visualização de profissionais pela plataforma é totalmente gratuita. O valor da consulta e o método de pagamento são definidos diretamente por cada profissional.</p>
                    </details>

                    <details className="group border border-slate-200 rounded-lg p-4 bg-white cursor-pointer focus-within:ring-2 focus-within:ring-emerald-500">
                        <summary className="font-semibold text-lg text-emerald-900 flex justify-between items-center outline-none list-none marker:hidden">
                            <span>Como posso me cadastrar como profissional?</span>
                            <span className="group-open:rotate-180 transition-transform duration-200">↓</span>
                        </summary>
                        <p className="mt-4 text-slate-600 leading-relaxed">Se você é um profissional da saúde e deseja fazer parte da nossa rede, clique no botão &quot;Entrar&quot; no cabeçalho e siga o passo a passo para o cadastro de profissionais da saúde.</p>
                    </details>
                </div>

                <section className="mt-12 pt-8 border-t border-slate-200 text-center">
                    <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Ainda precisa de ajuda?</h2>
                    <p className="mb-6">Nossa equipe de suporte está sempre pronta para te atender.</p>
                    <a href="mailto:contato@lacreisaude.com.br" className="inline-flex items-center justify-center rounded bg-emerald-900 px-6 py-3 font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors">
                        Falar com o Suporte
                    </a>
                </section>
            </div>
        </main>
    );
}