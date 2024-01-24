import { Link } from "react-router-dom";
import Home from "../Home";

export default function Register() {

    return (
        <main>
            <form action="">
                <label htmlFor="">
                    Nome:
                    <input type="text" placeholder="Digite seu nome" />
                </label>
                <label htmlFor="">
                    E-mail:
                    <input type="text" placeholder="Digite seu e-mail" />
                </label>
                <label htmlFor="">
                    Senha:
                    <input type="text" name="" id="" placeholder="Digite sua senha" />
                </label>
                <Link to=".." relative="">
                    <button type="submit" >Cadastrar</button>
                </Link>
                <span>Possui Cadastro?
                    <Link to="../login">
                        <span onClick={""}>Clique aqui</span>
                    </Link>
                </span>
            </form>
        </main>
    )
}