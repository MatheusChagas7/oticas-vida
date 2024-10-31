import estilos from "@/styles/Rodape.module.css"

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.rodape_container}>
                <p>© 2024 Óticas Vida. - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}