import Link from "next/link";
import Botao from "../Botao/Botao";

export default function Cabecalho() {
    return (
        <header className="sticky top-0 z-40 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row sm:gap-6">
                <Link href="/" className="text-xl font-bold tracking-tight text-emerald-900 transition-transform hover:scale-105">
                    Lacrei Saúde
                </Link>
                <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-8">
                    <nav className="flex items-center gap-4 sm:gap-6">
                        <Link href="/QuemSomos" className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-900">
                            Quem Somos
                        </Link>
                        <Link href="/Ajuda" className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-900">
                            Ajuda
                        </Link>
                    </nav>
                    <Botao variant="primary" icon="↓" iconPosition="right">
                        Entrar
                    </Botao>
                </div>
            </div>
        </header>
    );
}