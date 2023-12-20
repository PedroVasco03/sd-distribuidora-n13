"use client"

import Link from "next/link"
import style from "./sidebar.module.css"
import { usePathname } from "next/navigation"

const Sidebar = () => {

    const currentRoute = usePathname();

    return (
        <>
            <aside className={style.left_sidebar}>
                <nav className={style.sideCont}>
                    <div className={style.sideHead}>
                        <ul className={style.sideLinks}>
                            <Link className={style.Link} href="/pages/user/pages"> 
                                    <li className={style.sideLogo}>
                                        <h1 className="logo me-auto" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                                    </li>
                            </Link>
                        </ul>
                    </div>
                    <div className={style.sideBody}>
                        <ul className={style.sideLinks}>
                            <Link className={style.Link} href="/pages/user/pages"> 
                                <li className={style.sideLink}style={{
                                    fontWeight: currentRoute === "/pages/user/pages" ? 700 :" ",
                                    backgroundColor: currentRoute === "/pages/user/pages" ? "#00bfd8" : "",
                                    color: currentRoute === "/pages/user/pages" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/pages/user/pages" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-home"></i>
                                    <div className={style.Link}>Home</div>
                                </li>
                            </Link>
                            <Link className={style.Link} href="#"> 
                                <li className={style.sideLink} style={{
                                    fontWeight: currentRoute === "/pages/user/pages/request" ? 700 :" ",
                                    backgroundColor: currentRoute === "/pages/user/pages/request" ? "#00bfd8" : "",
                                    color: currentRoute === "/pages/user/pages/request" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/pages/user/pages/request" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-paper-plane "></i>
                                    <div className={style.Link}>Fazer Pedido</div>
                                </li>
                            </Link>
                            <Link className={style.Link} href="#"> 
                                <li className={style.sideLink} style={{
                                    fontWeight: currentRoute === "/pages/user/pages/chat" ? 700 :" ",
                                    backgroundColor: currentRoute === "/pages/user/pages/chat" ? "#00bfd8" : "",
                                    color: currentRoute === "/pages/user/pages/chat" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/pages/user/pages/chat" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-comments"></i>
                                    <div className={style.Link}>Comunidade</div>
                                </li>
                            </Link>
                            <Link className={style.Link} href="#">   
                                <li className={style.sideLink} style={{
                                    fontWeight: currentRoute === "/pages/user/pages/profile" ? 700 :" ",
                                    backgroundColor: currentRoute === "/pages/user/pages/profile" ? "#00bfd8" : "",
                                    color: currentRoute === "/pages/user/pages/profile" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/pages/user/pages/profile" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-user"></i>
                                    <div className={style.Link}>Perfil</div>
                                </li>
                            </Link> 
                        </ul>
                    </div>
                    <div className={style.sideFooter}>
                        <ul className={style.sideSair}>
                            <Link className={style.Link} href="/"> 
                                <li className={style.sideLink}>
                                    <i className="fas fa-sign-out"></i>
                                    <div className={style.Link}>Terminar Sessão</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar