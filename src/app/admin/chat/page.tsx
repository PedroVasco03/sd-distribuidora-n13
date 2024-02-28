"use client"
import { useEffect } from 'react';
import MainRoot from './components/main';
import Aside from '../components/aside';
import index from '../styles/index.module.css'; 
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        // Verificar se o usuário está autenticado ao carregar a página
        if (!sessionStorage.admin) {
            router.push('/admin/login');
        }
    }, []); // Executar apenas uma vez ao carregar a página

    // Renderizar apenas se o usuário estiver autenticado
    return sessionStorage.admin ? (
        <div className={index.Main}>
            <Aside />
            <MainRoot />
        </div>
    ) : null; // Se não autenticado, não renderizar nada
}
