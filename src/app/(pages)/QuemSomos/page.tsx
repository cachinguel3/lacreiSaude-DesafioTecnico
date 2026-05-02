export const metadata = {
    title: "Quem Somos | Lacrei Saúde",
    description: "Conheça a história e o propósito da Lacrei Saúde.",
};

export default function QuemSomos() {
    return (
        <main className="flex flex-1 flex-col items-center gap-12 p-8 sm:p-16 bg-slate-50">
            <h1 className="text-4xl font-bold text-emerald-900 text-center">Quem Somos</h1>
            
            <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row">
                {/* Espaço reservado para a foto */}
                <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] rounded-2xl bg-emerald-100 border border-emerald-200 shadow-inner flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-emerald-800 font-medium text-center p-4">
                        <span className="text-4xl mb-2" aria-hidden="true">📸</span>
                        <p>Imagem Institucional ou da Equipe</p>
                    </div>
                </div>

                {/* Conteúdo em texto */}
                <div className="flex-1 space-y-6 text-lg text-slate-700 leading-relaxed">
                    <p>
                        A <strong>Lacrei Saúde</strong> é uma plataforma dedicada a conectar pessoas da comunidade LGBTQIAPN+ a profissionais de saúde qualificados, inclusivos e acolhedores.
                    </p>
                    <p>
                        Nosso maior propósito é garantir que o acesso à saúde aconteça sem julgamentos ou preconceitos. Acreditamos que o atendimento humanizado, focado na segurança, no respeito e na empatia, é um direito de todes.
                    </p>
                    <p>
                        Trabalhamos todos os dias para construir um espaço seguro onde pacientes possam encontrar especialistas em diversas áreas da saúde clínica e mental, que entendam e valorizem suas necessidades e vivências.
                    </p>
                </div>
            </div>
        </main>
    );
}