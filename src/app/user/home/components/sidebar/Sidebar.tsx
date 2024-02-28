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
                            <Link className={style.Link} href="/user/home"> 
                                    <li className={style.sideLogo}>
                                        <h1 className="logo me-auto" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                                    </li>
                            </Link>
                        </ul>
                    </div>
                    <div className={style.sideBody}>
                        <ul className={style.sideLinks}>
                            <Link className={style.Link} href="/user/home"> 
                                <li className={style.sideLink}style={{
                                    fontWeight: currentRoute === "/user/home" ? 700 :" ",
                                    backgroundColor: currentRoute === "/user/home" ? "#00bfd8" : "",
                                    color: currentRoute === "/user/home" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/user/home" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-home"></i>
                                    <div className={style.Link}>Home</div>
                                </li>
                            </Link>
                            <Link className={style.Link} href="/user/request"> 
                                <li className={style.sideLink} style={{
                                    fontWeight: currentRoute === "/user/request" ? 700 :" ",
                                    backgroundColor: currentRoute === "/user/request" ? "#00bfd8" : "",
                                    color: currentRoute === "/user/request" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/user/request" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-paper-plane "></i>
                                    <div className={style.Link}>Fazer Pedido</div>
                                </li>
                            </Link>
                            <Link className={style.Link} href="/user/chat"> 
                                <li className={style.sideLink} style={{
                                    fontWeight: currentRoute === "/user/chat" ? 700 :" ",
                                    backgroundColor: currentRoute === "/user/chat" ? "#00bfd8" : "",
                                    color: currentRoute === "/user/chat" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/user/chat" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-comments"></i>
                                    <div className={style.Link}>Comunidade</div>
                                </li>
                            </Link>
                            <Link className={style.Link} href="/user/settings">   
                                <li className={style.sideLink} style={{
                                    fontWeight: currentRoute === "/user/settings" ? 700 :" ",
                                    backgroundColor: currentRoute === "/user/settings" ? "#00bfd8" : "",
                                    color: currentRoute === "/user/settings" ? "#fff" :" ",
                                    marginLeft: currentRoute === "/user/settings" ? "-20%" : "",
                                }}>
                                    <i className="fas fa-user"></i>
                                    <div className={style.Link}>Perfil</div>
                                </li>
                            </Link> 
                        </ul>
                    </div>
                    <div className={style.sideFooter}>
                        <ul className={style.sideSair}>
                            <Link className={style.Link} href="/login" onClick={()=>{sessionStorage.removeItem('user')}}> 
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