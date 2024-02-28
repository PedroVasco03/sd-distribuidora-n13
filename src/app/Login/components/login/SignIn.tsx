"use client"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import getAll from '../../../services/getAll' 
import { useRouter } from "next/navigation"
const SignIn = () =>{
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [data, setData] = useState([])
    useEffect(()=>{
        getData()   
    })
    const getData = async()=>{
        getAll('usuario').then((res)=>{
            setData(res.data)
        })
    }
    const handleForm = (e)=>{
        e.preventDefault()
        const newData = data.filter((item)=> item.email === email && item.senha ===senha)
        if(email !="" && senha!=""){
            if(newData.length != 0){
                if(newData[0].permissao !="restrito"){
                    sessionStorage.setItem('user', JSON.stringify(newData))
                    router.push('/user/home') 
                }
                else{
                    alert('Acesso negado, precisa de um verificação do administrador!')
                }
            }
            else{
                alert('Dados não encontrados!')
            }
        }else{
            alert('Preencha os campos!')
        }
        
    }
    return(
        <>
            <form className="form" action="#">
                        <h1 className="h1">Sign in</h1>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="input" type="email" placeholder="Email" required/>
                        <input value={senha} onChange={(e)=>setSenha(e.target.value)} className="input" type="password" placeholder="Password" required/>
                        <button onClick={handleForm} className="button">Entrar</button> 
            </form>
               
        </>
    )
}

export default SignIn
