import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";


export default function Header() {


    return (
        <header>
            <div>
                <button> - </button>
                <img src="./src/assets/E-rede_Store.png" alt="" />
                <IoCartOutline />
            </div>
            <label htmlFor="">
            <IoSearchOutline />
                <input type="text" placeholder="Buscar" className="" />
            </label>
        </header>
    )
}