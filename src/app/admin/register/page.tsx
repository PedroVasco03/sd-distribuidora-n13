"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import background from '../background.module.css';
import getAll from '@/app/services/getAll';
import post from '@/app/services/post';

interface AdminData {
    admin: string;
    senha: string;
}

export default function CreateAccount() {
    const [data, setData] = useState<AdminData[]>([]);
    const [admin, setAdmin] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [senhaValida, setSenhaValida] = useState<boolean>(true);

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

        if (!admin || !senha) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (!senhaValida) {
            alert('A senha deve ter pelo menos 8 caracteres, contendo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
            return;
        }

        const existingAdmin = data.find(item => item.admin === admin);
        if (existingAdmin) {
            alert('Este nome de usuário já está em uso!');
            return;
        }

        const newItem: AdminData = { admin, senha };
        try {
            post('admin', newItem);
            alert('Usuário criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            alert('Erro ao criar usuário. Por favor, tente novamente.');
        }
    };

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSenha = e.target.value;
        setSenha(newSenha);
        const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
        setSenhaValida(senhaRegex.test(newSenha));
    };

    return (
        <div className={`d-flex ${background.Container}`}>
            <form style={{ width: '500px', height: '400px' }} className="shadow p-3 mb-5 bg-body rounded" onSubmit={handleForm}>
                <li className={background.sideLogo}>
                    <h1 className="logo me-auto text-center" style={{ color: '#00bfd8' }}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize: '0.9rem', letterSpacing: '4px' }}>distribuidora</span></h1>
                </li>
                <label htmlFor="" className='mt-5 text-muted'>Nome de Usuário</label>
                <input value={admin} onChange={(e) => setAdmin(e.target.value)} type='text' className=' mt-1 form-control' />
                <label htmlFor="" className='mt-3 text-muted'>Senha</label>
                <input value={senha} onChange={handleSenhaChange} type='password' className={`mt-1 form-control ${senhaValida ? '' : 'is-invalid'}`} />
                {!senhaValida && <div className="invalid-feedback">A senha deve ter pelo menos 8 caracteres, contendo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.</div>}
                <button type="submit" className='btn btn-primary mt-3'>Salvar</button>
            </form>
        </div>
    );
}
