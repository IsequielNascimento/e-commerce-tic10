export default function MyCart() {

    return (
        <section>
            <h2>Meu Carrinho</h2>
            
            <hr />

            <section>{/* Futuro component card */}
                <img src="./src/assets/product.png" alt="" />
                <div>

                    <h3>Nique Air Surf</h3>
                    <span> Tênis </span>
                    <span>R$ 220,00</span>
                </div>
            </section>

            <hr />

            <span>Valor total: R$440,00</span>
            <span>
                <button>Esvaziar</button>
                <button>Finalizar Compra</button>
            </span>
        </section>

    )
}