import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-16 flex-1">
            <h1 className="text-6xl font-bold text-emerald-900">404</h1>
            <p className="text-lg text-slate-700">Ops! Página não encontrada.</p>
            <Link href="/"
                className="inline-flex items-center gap-2 rounded bg-emerald-900 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
}