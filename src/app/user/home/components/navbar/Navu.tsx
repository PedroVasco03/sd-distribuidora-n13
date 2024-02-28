"use client"

import style from "./nav.module.css"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Navu = () => {

    const [css, setCss] = useState('')
    const currentRoute = usePathname();

    function toggleMenu(){
        if(css==='') 
            setCss('nav_open_menu__m2X8Q')
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
                            <Link className={style.sub_menu_link} href="/pages/user/pages" style={{
                                    fontWeight: currentRoute === "/pages/user/pages" ? 700 :" ",
                                    color: currentRoute === "/pages/user/pages" ? "#00bfd8" : "",
                                    marginLeft: currentRoute === "/pages/user/pages" ? "10%" : "",
                                }}> 
                                    <i className="fas fa-home"></i>
                                    <p>Home</p>
                            </Link>

                            <Link className={style.sub_menu_link} href="/pages/user/pages/request" style={{
                                    fontWeight: currentRoute === "/pages/user/pages/request" ? 700 :" ",
                                    color: currentRoute === "/pages/user/pages/request" ? "#00bfd8" : "",
                                    marginLeft: currentRoute === "/pages/user/pages/request" ? "10%" : "",
                                }}> 
                                    <i className="fas fa-paper-plane "></i>
                                    <p>Pedido</p>
                            </Link>

                            <Link className={style.sub_menu_link} href="/pages/user/pages/chat" style={{
                                    fontWeight: currentRoute === "/pages/user/pages/chat" ? 700 :" ",
                                    color: currentRoute === "/pages/user/pages/chat" ? "#00bfd8" : "",
                                    marginLeft: currentRoute === "/pages/user/pages/chat" ? "10%" : "",
                                }}> 
                                    <i className="fas fa-comments"></i>
                                    <p>Comunidade</p>
                            </Link>

                            <Link className={style.sub_menu_link} href="/pages/user/pages/settings" style={{
                                    fontWeight: currentRoute === "/pages/user/pages/settings" ? 700 :" ",
                                    color: currentRoute === "/pages/user/pages/settings" ? "#00bfd8" : "",
                                    marginLeft: currentRoute === "/pages/user/pages/settings" ? "10%" : "",
                                }}> 
                                    <i className="fas fa-user"></i>
                                    <p>Perfil</p>
                            </Link>
                            <Link href="/login" className={style.sub_menu_link} onClick={()=>{sessionStorage.removeItem('user')}} >
                                <i className="fas fa-sign-out"></i>
                                <p>Sair</p>
                            </Link>
                        </div>
                    </div>
                    
        </nav>
        </>
    )
}

export default Navu