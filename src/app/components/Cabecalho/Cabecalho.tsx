import Link from "next/link";
import Botao from "../Botao/Botao";

export default function Cabecalho() {
    return (
        <header className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
                <Link href="/" className="text-lg font-bold tracking-tight text-emerald-900">
                    Lacrei Saúde
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/QuemSomos" className="text-sm font-semibold text-slate-700 hover:text-emerald-900">
                        Quem Somos
                    </Link>
                    <Link href="/Ajuda" className="text-sm font-semibold text-slate-700 hover:text-emerald-900">
                        Ajuda
                    </Link>
                </div>
                <Botao variant="primary" icon="↓" iconPosition="right">
                    Entrar
                </Botao>
            </div>
        </header>
    );
}