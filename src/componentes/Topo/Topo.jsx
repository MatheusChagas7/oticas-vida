import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png"
import estilos from "@/styles/Topo.module.css"

export default function Topo() {
    return (
        <header>
            <div className={estilos.topo_container}>
                <Image src={Logo} alt="Logo" className={estilos.imagem_topo} />
                <nav className={estilos.links_topo_container}>
                    <Link href="#produtos">PROTUDOS</Link>
                    <Link href="#sobre">SOBRE</Link>
                    <Link href="#contato">CONTATO</Link>
                </nav>
            </div>
        </header>
    )
}