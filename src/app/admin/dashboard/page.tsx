"use client"

import { useEffect } from 'react';
import MainRoot from './components/main';
import Aside from '../components/aside';
import index from '../styles/index.module.css';
import { useRouter } from 'next/navigation'; // Use useRouter em vez de useRouter from 'next/navigation'

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const checkAuthentication = async () => {
            // Verificar se o usuário está autenticado
            if (!sessionStorage.admin) {
                // Redirecionar para a página de login
                await router.push('/admin/login');
            }
        };

        checkAuthentication();
    }, []);

    // Renderizar apenas se o usuário estiver autenticado
    return sessionStorage.admin ? (
        <div className={index.Main}>
            <Aside />
            <MainRoot />
        </div>
    ) : null; // Se não autenticado, não renderizar nada
}
