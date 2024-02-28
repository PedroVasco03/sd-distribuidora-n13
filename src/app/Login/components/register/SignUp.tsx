// "use client"
// import React, { useContext, useEffect } from "react"
// import { useState } from "react"
// import img from "../../assets/images/next.png"
// import img2 from "../../assets/images/back.png"
// import Image from "next/image"
// import post from '../../../services/post'
// import getAll from "@/app/services/getAll"
// const SignUp = () =>{
    
//     const[clas,setClas]= React.useState('grupo1')
//     const[clas2,setClas2]= React.useState('')
//     const [nome, setNome] = useState('')
//     const [email, setEmail] = useState('')
//     const [contacto, setContacto] = useState('')
//     const [municipio, setMunicipio] = useState('')
//     const [bairro, setBairro] = useState('')
//     const [rua, setRua] = useState('')
//     const [senha, setSenha] = useState('')
//     const [data, setData] = useState([])
//     useEffect(()=>{
//         fetchData()
//     })
//     const fetchData = async ()=>{
//         getAll('usuario').then((res)=>{
//             setData(res.data)
//         })
//     }
//     const next = () => {
//         if(clas === 'grupo1')
//             setClas('')
//         else
//             setClas('grupo1')

//         if(clas2 === '')
//             setClas2('grupo1')
//         else
//             setClas2('')
//     }
//    async function handleForm(e:any){
//     e.preventDefault()    
//     const newData = data.filter((item) =>  item.nome === nome && item.email === email && item.telefone === contacto)
//     if(newData.length == 0){
//         if(nome && email && contacto && municipio && bairro && rua && senha){
//             const data = {
//                 nome,
//                 email,
//                 contacto,
//                 municipio,
//                 bairro,
//                 rua,
//                 senha, 
//                 permissao: 'restrito'
//             } 
//             post('usuario', data)
//         }else{
//             alert('Preencha todos os campos!')
//         }
//     }
// }
//     return(
//         <>
//             <form className="form" action="#" onSubmit={handleForm}>
//                 <h1 className="h1">Criar Conta</h1>
//                 {/* nome,email,senha,nva,rua,municipio,contacto,bairro */}
//                 <div className={"grupo "+clas}>
//                     <input value={nome} onChange={(e)=>setNome(e.target.value)} className="input" type="text" placeholder="Nome" required/>
//                     <input value={email} onChange={(e)=>setEmail(e.target.value)} className="input" type="email" placeholder="Email" required/>
//                     <input value={contacto} onChange={(e)=>setContacto(e.target.value)} className="input" type="tel" placeholder="Contacto" required/>
//                     <input value={municipio} onChange={(e)=>setMunicipio(e.target.value)} className="input" type="text" placeholder="Município" required/>
//                     <br/><Image src={img} onClick={next} className="btnI btnNext" alt="btnNext"/>
//                 </div>
//                 <div className={"grupo "+clas2}>
//                     <input value={bairro} onChange={(e)=>setBairro(e.target.value)} className="input" type="text" placeholder="Bairro" required/>
//                     <input value={rua} onChange={(e)=>setRua(e.target.value)} className="input" type="text" placeholder="Rua" required/>
//                     <input value={senha} onChange={(e)=>setSenha(e.target.value)} className="input" type="password" placeholder="Senha" required/>
//                     <button type="submit" className="btnCadastro button">Cadastrar</button> <br/>
//                     <Image src={img2} onClick={next} className="btnI btnPrev" alt="btnPrev"/>
//                 </div>
                
//             </form>
//         </>
//     )
// }

// export default SignUp



import React, { useState, useEffect } from "react";
import img from "../../assets/images/next.png"
import img2 from "../../assets/images/back.png"
import Image from "next/image";
import post from '../../../services/post';
import getAll from "@/app/services/getAll";

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
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        getAll('usuario').then((res) => {
            setData(res.data);
        });
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
        const newData = data.filter((item) => item.nome === nome && item.email === email && item.telefone === contacto);
        if (newData.length === 0) {
            if (nome && email && contacto && municipio && bairro && rua && senha) {
                const userData = {
                    nome,
                    email,
                    contacto,
                    municipio,
                    bairro,
                    rua,
                    senha,
                    permissao: 'restrito'
                };
                post('usuario', userData);
            } else {
                alert('Preencha todos os campos!');
            }
        }
    }

    return (
        <>
            <form className="form" action="#" onSubmit={handleForm}>
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
            </form>
        </>
    );
}

export default SignUp;
