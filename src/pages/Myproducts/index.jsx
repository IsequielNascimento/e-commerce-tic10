import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Card from "../../components/Card";



export default function Myproducts() {

    return (
        <main>
            <button>Meus Pedidos <IoMdArrowDropdown /> </button>
            <Card/>
        </main>
    )
}