import Link from "next/link";

export default function Cabecalho() {
    return (
        <div className="flex flex-row justify-between items-center p-4 text-color1">
            <Link href="/">
                <h1>Lacrei Saúde</h1>
            </Link>
            <Link href="/QuemSomos">
                <h2>Quem Somos</h2>
            </Link>
            <Link href="/ajuda">
                <h2>Ajuda</h2>
            </Link>

        </div>
    );
}