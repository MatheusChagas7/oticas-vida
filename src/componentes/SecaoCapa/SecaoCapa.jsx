import estilos from "@/styles/SecaoCapa.module.css"

export default function SecaoCapa() {
    return (
        <section className={estilos.secao_capa}>
            <div className={estilos.capa_container}>
                <div className={estilos.texto_capa}>
                    <p>Preços baixos em</p>
                    <h1>ÓCULOS DE GRAU E DE SOL</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    )
}