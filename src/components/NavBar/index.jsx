import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex flex-col items-center text-white">
            <h3 className="mb-2">Páginas</h3>
            <hr className="w-16 border-white mb-2" />
            <div className="flex flex-col items-center space-y-2">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/products" className="text-white">Produtos</Link>
                <Link to="/categories" className="text-white">Categorias</Link>
                <Link to="/orders" className="text-white">Meus Pedidos</Link>
            </div>
            <hr className="w-16 border-white my-2" />
            <div className="flex space-x-2">
                <Link to="/register" className="text-white">Cadastre-se</Link>
                <Link to="/login" className="text-white">Entrar</Link>
            </div>
        </div>
    );
}
