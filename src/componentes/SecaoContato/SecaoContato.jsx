import Image from "next/image";
import estilos from "@/styles/SecaoContato.module.css";

import Local from "@/../public/local.png";
import Telefone from "@/../public/telefone.png";
import Email from "@/../public/email.png";
import Facebook from "@/../public/fb.png";
import Instagram from "@/../public/ig.png";
import Twitter from "@/../public/tt.png";

export default function SecaoContato() {
    return (
        <section id="contato" className={estilos.secao_contato}>
            <div className={estilos.contato_container}>
                <h3 className={estilos.subtitulo_contato}>Fale conosco</h3>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato
                    através de nossas redes sociais ou da central de atendimento.
                </p>
                <div className={estilos.grupo_cards_contato}>
                    <div className={estilos.card_contato}>
                        <h3>Nossos Contatos</h3>
                        <span className={estilos.span_contato}><Image src={Local} className={estilos.imagem_span} /> Nova Iguaçu, RJ</span>
                        <span className={estilos.span_contato}><Image src={Telefone} className={estilos.imagem_span} /> (21) 99999-9999</span>
                        <span className={estilos.span_contato}><Image src={Email} className={estilos.imagem_span} /> contato@oticavida.com</span>
                    </div>
                    <div className={estilos.card_contato}>
                        <h3>Nossas Redes Sociais</h3>
                        <span className={estilos.span_contato}><Image src={Facebook} className={estilos.imagem_span} /> /OticaVida</span>
                        <span className={estilos.span_contato}><Image src={Instagram} className={estilos.imagem_span} /> @oticavidarj</span>
                        <span className={estilos.span_contato}><Image src={Twitter} className={estilos.imagem_span} /> @oticavidarj</span>
                    </div>
                </div>
            </div>
        </section>
    )
}