import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center sm:p-16">
            <h1 className="text-6xl font-bold text-emerald-900 sm:text-8xl">404</h1>
            <p className="text-lg text-slate-700 sm:text-xl">Ops! A página que você está procurando não existe.</p>
            <Link href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-900 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
            >
                Voltar para o Início
            </Link>
        </div>
    );
}