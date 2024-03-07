import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import NavigationBar from "../NavigationBar";


export default function Header() {


    return (
        <>

            <header className=" flex w-screen flex-col h-32 justify-center items-start bg-blue-900">
                {/* <section className="flex items-center h-16 flex-col w-9/12">
                    <div className=" w-screen flex items-center m-6 justify-around">
                        <button> <IoMdMenu className=" text-white size-7" /> </button>
                        <img src="./src/assets/E-rede_Store.png" alt="" />
                        <IoCartOutline className=" text-white w-7 size-7" />
                    </div>

                    <label htmlFor="">
                        <IoSearchOutline />
                        <input type="text" placeholder="Buscar" className="" />
                    </label>

                </section> */}
                <NavBar/>
            </header>

        </>
    )
}