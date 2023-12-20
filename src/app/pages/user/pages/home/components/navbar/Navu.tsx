"use client"

import style from "./nav.module.css"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Navu = () => {

    const [css, setCss] = useState('')
   
    function toggleMenu(){
        if(css==='') 
            setCss('nav_open_menu__SMfca')
        else
            setCss('')
    }

    return(
        <>
            <nav className={style.nav}>
                    <Link className={style.Link} href="/pages/user/pages"> 
                        <li className={style.sideLogo}>
                            <h1 className="logo me-auto" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                        </li>
                    </Link>
                    <div className={style.contImage}>
                     <i className="fas fa-user" onClick={toggleMenu}></i> 
                    </div>

                    <div className={style.sub_menu_wrap +" "+ css}>
                        <div className={style.sub_menu}>
                            <div className={style.user_info}>
                                <i className="fas fa-user"></i>
                                <h2>Nome de usuario</h2>
                            </div>
                            <hr/>
                            <a href="/aluno/chat" className={style.sub_menu_link}>
                                <i className="fas fa-home"></i>
                                <p>Home</p>
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="/aluno/agendar" className={style.sub_menu_link}>
                                <i className="fas fa-paper-plane "></i>
                                <p>Pedido</p>
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="/aluno/pedido" className={style.sub_menu_link}>
                                <i className="fas fa-comments"></i>
                                <p>Comunidade</p>
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="/aluno/definicoes" className={style.sub_menu_link}>
                                <i className="fas fa-user"></i>
                                <p>Perfil</p>
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                            <a href="/" className={style.sub_menu_link} >
                                <i className="fas fa-sign-out"></i>
                                <p>Sair</p>
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>
                    </div>
                    
        </nav>
        </>
    )
}

export default Navu