"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import asideStyles from '../styles/aside.module.css';

export default function Aside(): JSX.Element {
    const router = useRouter();
    const currentRoute = usePathname();

    return (
        <div className={asideStyles.Aside}>
            <div className={asideStyles.Container}>
                <Link href={'/admin/dashboard'}>
                    <li className={asideStyles.sideLogo}>
                        <h1 className="logo me-auto" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                    </li>
                </Link>
            </div>
            <aside className={asideStyles.nav}>
               <ul className={asideStyles.list}>
                    <li className={asideStyles.textMenu}>Menu Usuário</li>
                    <Link href={'/admin/dashboard'}>
                        <li className={`${asideStyles.item} ${currentRoute == '/admin/dashboard' ? asideStyles.active : ''}`}>Home</li>
                    </Link>
                    <Link href={'/admin/requests'}>
                        <li className={`${asideStyles.item} ${currentRoute == '/admin/requests' ? asideStyles.active : ''}`}>Ver Pedidos</li>
                    </Link>
                    <Link href={'/admin/chat'}>
                        <li className={`${asideStyles.item} ${currentRoute == '/admin/chat' ? asideStyles.active : ''}`}>Chat</li>
                    </Link>
                    <Link href={'/admin/settings'}>
                         <li className={`${asideStyles.item} ${currentRoute == '/admin/settings' ? asideStyles.active : ''}`}>Perfil</li>
                    </Link>
                    <li className={asideStyles.textMenu}>Sessão</li>
                    <Link href={''}>
                        <li className={asideStyles.item}>Terminar Sessão</li>
                    </Link>
               </ul> 
            </aside>   
        </div>
    );
}
