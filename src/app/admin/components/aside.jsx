"use client"
import Link from "next/link";
import aside from '../styles/aside.module.css'
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Aside(props){
    const currentRoute = usePathname();
    return(
        <div className={aside.Aside}>
            <div className={aside.Container}>
                <Link className={aside.link} href={'/admin/dashboard'}>
                    <li className={aside.sideLogo}>
                        <h1 className="logo me-auto" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                    </li>
                </Link>
            </div>
            <aside className={aside.nav}>
               <ul className={aside.list}>
                    <li className={aside.textMenu}>Menu Usuário</li>
                    <Link className={aside.link} href={'/admin/dashboard'}>
                        <li className={`${aside.item} ${currentRoute =='/admin/dashboard' ? aside.active : ''}`}>Home</li>
                    </Link>
                    <Link className={aside.link} href={'/admin/requests'}>
                        <li className={`${aside.item} ${currentRoute =='/admin/requests' ? aside.active : ''}`}>Ver Pedidos</li>
                    </Link>
                    <Link className={aside.link} href={'/admin/chat'}>
                        <li className={`${aside.item} ${currentRoute =='/admin/chat' ? aside.active : ''}`}>Chat</li>
                    </Link>
                    <Link className={aside.link} href={'/admin/settings'}>
                         <li className={`${aside.item} ${currentRoute =='/admin/settings' ? aside.active : ''}`}>Perfil</li>
                    </Link>
                    <li className={aside.textMenu}>Sessão</li>
                    <Link className={aside.link} href={''}>
                        <li className={aside.item}>Terminar Sessão</li>
                    </Link>
               </ul> 
            </aside>   
        </div>
    )
}