import Link from "next/link";
import BotaoVoltarAoTopo from "../BotaoVoltarAoTopo/BotaoVoltarAoTopo";

export default function Rodape() {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl space-y-6 px-6 py-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                        <span className="text-lg font-bold text-emerald-900">Lacrei Saúde</span>
                        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
                            <Link href="/" className="hover:text-emerald-900">
                                Lacrei Saúde
                            </Link>
                            <Link href="/pessoas-profissionais" className="hover:text-emerald-900">
                                Pessoas Profissionais
                            </Link>
                            <Link href="/politica-de-privacidade" className="hover:text-emerald-900">
                                Política de Privacidade
                            </Link>
                            <Link href="/termos-de-uso" className="hover:text-emerald-900">
                                Termos de Uso
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="facebook site externo - abrirá uma nova janela"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100"
                        >
                            <span aria-hidden="true">F</span>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram site externo - abrirá uma nova janela"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100"
                        >
                            <span aria-hidden="true">I</span>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="linkedin site externo - abrirá uma nova janela"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100"
                        >
                            <span aria-hidden="true">in</span>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="e-mail site externo - abrirá uma nova janela"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100"
                        >
                            <span aria-hidden="true">@</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>CNPJ: 51.285.351/0001-65</span>
                    <BotaoVoltarAoTopo />
                </div>
            </div>
        </footer>
    );
}