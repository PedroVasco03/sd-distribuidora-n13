"use client";
import React from "react";
import Image from "next/image";
import style from "./nav.module.css"
import { useState } from "react";

const Navbar = () =>{
    
    const [open, setOpen] = React.useState<string>()

    const Opened = () => {
        if(open==='')
            setOpen('nav_openNav__wTAUI')
        else
            setOpen('')
    }
    return(
        <>
        
           {/* Header  */}
            <header id="header"  className={style.header+" "+open}>
                <div className={style.contNav}>
                    <div className={style.logo}>
                        <a href="/" className={style.logoLink}> 
                            <h1 className="logo me-auto" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                        </a>
                    </div>
                    <nav id="navbar" className={"nav "+style.nav}>
                        <ul className={style.ul}>
                        <li><a className={style.navLink} href="#hero">Home</a></li>
                        <li><a className={style.navLink} href="#services">Serviços</a></li>
                        <li><a className={style.navLink} href="#prices">Preços</a></li>
                        <li><a className={style.navLink} href="#about">Sobre</a></li>
                        <li><a className={style.navLink} href="#contact">Contactos</a></li>
                        </ul>
                    </nav>
                    <i className={style.open+" fas fa-bars "+ style.mobile_togle} onClick={Opened}></i>
                    <i className={style.close+" fas fa-x "+ style.mobile_togle} onClick={Opened}></i>
                    {/* navbar */}
                </div>
            </header>
            {/* End Header */}
        </>
    )
}

export default Navbar;