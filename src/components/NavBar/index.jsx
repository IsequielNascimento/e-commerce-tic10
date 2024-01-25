import { Link } from "react-router-dom"

export default function NavBar() {

    return (
        <section>
            <h3>
                Páginas
            </h3>
            <hr />
            <div>
                <button className=" ">
                    Home
                </button>
                <Link to="products" relative="">
                    <button>
                        Produtos
                    </button>
                </Link>
                <Link to="category">
                    <button>
                        Categorias
                    </button>
                </Link>
                <Link to="my-products">
                <button>
                    Meus Pedidos
                </button>
                </Link>
            </div>
            <hr />
            <span>
                <Link to="register">
                <button>
                    Cadastre-se
                </button>
                </Link>
                <Link to="login">
                <button>
                    Entrar
                </button>
                </Link>
            </span>
        </section>
    )
}