import React from "react";
import './header.css'
export default function Header() {
    return(
        <header className="header">
            <nav>
                <ul>
                    <h1>Felipe Liandro</h1>
                    <ul className="header-types">
                        <p>Projetos</p>
                        <p>Blog</p>
                        <p>Sobre Mim</p>
                        <p>Redes Sociais</p>
                    </ul>
                </ul>
                <ul>
                    <input type="text" placeholder="Pesquise por aqui..." />
                </ul>
            </nav>
        </header>
    )
}