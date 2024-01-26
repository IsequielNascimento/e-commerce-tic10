import { Link } from "react-router-dom"

export default function NavBar() {

    return (
        <span className="flex items-center justify-center w-screen h-auto">
            <h3 className="text-white">
                Páginas
            </h3>
            <hr />

            <div>
                <Link to=".." className="text-white">
                    Home
                </Link>
                <Link to="/products" className=" text-white">

                    Produtos

                </Link>
                <Link to="/category" className="text-white">

                    Categorias

                </Link>
                <Link to="/my-products" className="text-white">

                    Meus Pedidos

                </Link>
            </div>
            <hr />
            <span>
                <Link to="/register" className="text-white">

                    Cadastre-se

                </Link>
                <Link to="/login" className="text-white">

                    Entrar

                </Link>
            </span>
        </span>
    )
}