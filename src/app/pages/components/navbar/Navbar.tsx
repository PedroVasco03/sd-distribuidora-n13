import Image from "next/image";
import style from "./nav.module.css"

const Navbar = () =>{
    return(
        <>
           {/* Header  */}
            <header id="header"  className={style.header}>
                <div className={style.contNav}>
                    <div className={style.logo}>
                        <a href="./index.html" className={style.logoLink}> 
                            <h1 className="logo me-auto">SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                        </a>
                    </div>
                    
                    

                    <nav id="navbar" className={style.nav}>
                        <ul className={style.ul}>
                        <li><a className={style.navLink} href="#home">Home</a></li>
                        <li><a className={style.navLink} href="#sobre">Sobre</a></li>
                        <li><a className={style.navLink} href="#galeria">Produto</a></li>
                        <li><a className={style.navLink} href="#contactos_feedback">Contactos</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>.
                    {/* navbar */}

                    <a href="" className={style.get_started}>Agende agora</a>
                </div>
            </header>
            {/* End Header */}
        </>
    )
}

export default Navbar;