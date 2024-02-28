import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "../../assets/images/next.png";
import img2 from "../../assets/images/back.png";
import post from '../../../services/post';
import getAll from "@/app/services/getAll";

interface UserData {
    nome: string;
    email: string;
    contacto: string;
    municipio: string;
    bairro: string;
    rua: string;
    senha: string;
}

const SignUp = () => {
    const [clas, setClas] = useState('grupo1');
    const [clas2, setClas2] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [contacto, setContacto] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState<UserData[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await getAll('usuario');
            setData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const next = () => {
        if (clas === 'grupo1')
            setClas('');
        else
            setClas('grupo1');

        if (clas2 === '')
            setClas2('grupo1');
        else
            setClas2('');
    }

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isEmailValid = /\S+@\S+\.\S+/.test(email);
        const isContactoValid = /^\d{9}$/.test(contacto);
        const isSenhaValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(senha);

        if (!nome || !email || !contacto || !municipio || !bairro || !rua || !senha) {
            setError('Preencha todos os campos!');
            return;
        }

        if (!isEmailValid) {
            setError("Email inválido. Por favor, insira um email válido.");
            return;
        }

        if (!isContactoValid) {
            setError("Número de contacto inválido. Deve conter 9 dígitos.");
            return;
        }

        if (!isSenhaValid) {
            setError("A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
            return;
        }

        const newData = data.filter((item) => item.nome === nome && item.email === email && item.contacto === contacto);

        if (newData.length > 0) {
            setError('Os dados inseridos já existem!');
            return;
        }

        const userData: UserData = {
            nome,
            email,
            contacto,
            municipio,
            bairro,
            rua,
            senha,
        };

        post('usuario', userData)
            .then(() => {
                // Limpar campos após o cadastro bem-sucedido, se necessário
                setNome('');
                setEmail('');
                setContacto('');
                setMunicipio('');
                setBairro('');
                setRua('');
                setSenha('');
                setError('');
            })
            .catch((error) => {
                console.error("Error posting data:", error);
                setError("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
            });
    }

    return (
        <>
            <form className="form" onSubmit={handleForm}>
                <h1 className="h1">Criar Conta</h1>
                <div className={"grupo " + clas}>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} className="input" type="text" placeholder="Nome" required />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="Email" required />
                    <input value={contacto} onChange={(e) => setContacto(e.target.value)} className="input" type="tel" placeholder="Contacto" required />
                    <input value={municipio} onChange={(e) => setMunicipio(e.target.value)} className="input" type="text" placeholder="Município" required />
                    <br /><Image src={img} onClick={next} className="btnI btnNext" alt="btnNext" />
                </div>
                <div className={"grupo " + clas2}>
                    <input value={bairro} onChange={(e) => setBairro(e.target.value)} className="input" type="text" placeholder="Bairro" required />
                    <input value={rua} onChange={(e) => setRua(e.target.value)} className="input" type="text" placeholder="Rua" required />
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} className="input" type="password" placeholder="Senha" required />
                    <button type="submit" className="btnCadastro button">Cadastrar</button> <br />
                    <Image src={img2} onClick={next} className="btnI btnPrev" alt="btnPrev" />
                </div>
                {error && <p className="error">{error}</p>}
            </form>
        </>
    );
}

export default SignUp;
