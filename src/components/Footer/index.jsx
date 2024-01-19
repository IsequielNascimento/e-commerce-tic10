import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {

    return (
        <footer>
            <section>
                <img src="./src/assets/E-rede_Store.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis ad, incidunt error expedita maiores minima in optio, beatae sapiente amet quo debitis quaerat delectus minus numquam. Id, quasi aspernatur.</p>
            </section>
            <div id="socialMedias">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
            </div>
            <section>
                <div>
                    <h4>Informações</h4>
                    <span>Sobre o E-Rede Store</span>
                    <span>Segurança</span>
                    <span>Lista de desejos</span>
                    <span>Trabalhe conosco</span>
                </div>

                <div>
                    <h4>Informações</h4>
                    <span>Tênis</span>
                    <span>Acessórios</span>
                    <span>Esportivo</span>
                </div>

                <div>
                    <h4>Localizaçã</h4>
                    <span>Rua Martinho Rodrigues, 331</span>
                    <span>Bairro de Fátima, Fortaleza - CE</span>
                </div>

                <hr />



            </section>

            <span> 2023 irede </span>
        </footer>
    )
}