
export default function Cabecalho() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Lacrei Saúde</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-blue-500 hover:underline">Home</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline">Sobre</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}