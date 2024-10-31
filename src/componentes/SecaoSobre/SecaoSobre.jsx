import Image from "next/image";
import estilos from "@/styles/SecaoSobre.module.css"
import Loja from "@/../public/loja.png"
import Atendimento from "@/../public/atendimento.png"

export default function SecaoSobre() {
    return (
        <section id="sobre" className={estilos.secao_sobre}>
            <div className={estilos.sobre_container}>
                <div className={estilos.quem_somos_sobre}>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>
                        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas voda iniciou suas atividades focada
                        no atendimento ao publico de renda mais baixa, sempre com o objetivo de proporcionar ao cliente
                        bom atendimento, qualidade e preço baixo.
                    </p>
                </div>
                <div className={estilos.card_sobre}>
                    <div className={estilos.imagem_card_sobre}>
                        <Image src={Loja} className={estilos.imagem_sobre} />
                    </div>
                    <div className={estilos.card_sobre_info}>
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                    </div>
                    <div className={estilos.card_sobre_info}>
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <div className={estilos.imagem_card_sobre}>
                        <Image src={Atendimento} className={estilos.imagem_sobre} />
                    </div>
                </div>
            </div>
        </section>
    )
}