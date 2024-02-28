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
                        <input className="input" type="email" placeholder="Email" />
                        <input className="input" type="password" placeholder="Password" />
                        <a className="a" href="#">Esqueceu a senha?</a>
                        <Link href="../pages/user/pages"><button className="button">Entrar</button></Link> 
                    </form>
        </>
    )
}

export default SignIn
