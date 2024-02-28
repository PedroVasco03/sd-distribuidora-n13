"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import getAll from '../../services/getAll';
import background from '../background.module.css';

interface AdminData {
    admin: string;
    senha: string;
}

export default function Login(): JSX.Element {
    const router = useRouter();
    const [data, setData] = useState<AdminData[]>([]);
    const [nome, setNome] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await getAll('admin');
            setData(res.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!nome || !senha) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const newData = data.filter((item) => item.admin === nome && item.senha === senha);

        if (newData.length !== 0) {
            sessionStorage.setItem('admin', JSON.stringify(newData));
            router.push('/admin/dashboard');
        } else {
            alert('Usuário não encontrado!');
        }
    };

    return (
        <div className={`d-flex ${background.Container}`}>
            <form style={{ width: '500px', height: '400px' }} className="shadow p-3 mb-5 bg-body rounded" onSubmit={handleForm}>
                <li className={background.sideLogo}>
                    <h1 className="logo me-auto text-center" style={{ color: '#00bfd8' }}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize: '0.9rem', letterSpacing: '4px' }}>distribuidora</span></h1>
                </li>
                <label htmlFor="" className='mt-5 text-muted'>Nome de Usuário</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type='text' className=' mt-1 form-control' />
                <label htmlFor="" className='mt-3 text-muted'>Senha</label>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} type='password' className=' mt-1 form-control' />
                <button type="submit" className='btn btn-primary mt-3'>Entrar</button>
            </form>
        </div>
    );
}
