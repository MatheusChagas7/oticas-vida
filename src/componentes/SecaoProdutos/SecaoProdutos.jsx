import Image from "next/image";
import estilos from "@/styles/SecaoProdutos.module.css";

import Grau from "@/../public/oculos01.png";
import Transition from "@/../public/oculos02.png";
import Sol from "@/../public/oculos03.png";
import Infantil from "@/../public/oculos04.png";


export default function SecaoProdutos() {
    return (
        <section id="produtos" className={estilos.secao_produtos}>
            <div className={estilos.produtos_container}>

                <h3>Nossos Produtos</h3>
                <p>
                    Trabalhamos com óculos de gru, óculos de sol, lentes transition
                    nos modelos masculino, feminino e infantil
                </p>
                <p>
                    Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado
                </p>

                <div className={estilos.oculos_container}>
                    <div className={estilos.card_oculos}>
                        <h4>Óculos de grau</h4>
                        <Image src={Grau} alt="Óculos de Grau" className={estilos.imagem_oculos} />
                        <p>R$ 500,00</p>
                    </div>
                    <div className={estilos.card_oculos}>
                        <h4>Óculos transition</h4>
                        <Image src={Transition} alt="Óculos transition" className={estilos.imagem_oculos} />
                        <p>R$ 750,00</p>
                    </div>
                    <div className={estilos.card_oculos}>
                        <h4>Óculos de grau</h4>
                        <Image src={Sol} alt="Óculos de sol" className={estilos.imagem_oculos} />
                        <p>R$ 500,00</p>
                    </div>
                    <div className={estilos.card_oculos}>
                        <h4>Óculos de grau</h4>
                        <Image src={Infantil} alt="Óculos infantil" className={estilos.imagem_oculos} />
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <h3>Todos os nossos produtos incluem:</h3>

                <ul className={estilos.lista_beneficios}>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especias na compra de segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>

            </div>

        </section>
    )
}