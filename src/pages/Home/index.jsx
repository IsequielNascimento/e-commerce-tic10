import Card from "../../components/Card";
import MyCart from "../../components/MyCart";
import PagesComponent from "../../components/PagesComponent";
import Promotion from "../../components/Promotion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
             
       
         <PagesComponent/>
         <MyCart/>
         <Promotion />
         <div id="">
             <h2>Destaque</h2>
             <Card />
         </div>
         

        </>
    )
}