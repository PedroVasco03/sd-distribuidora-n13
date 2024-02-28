"use client"
import { useContext, useEffect, useState } from 'react'
import aside from '../aside.module.css'
import background from '../background.module.css'
import getAll from '../../services/getAll'
import { useRouter } from 'next/navigation'
export default function Login(){
    const router = useRouter()
    const [data, setData] = useState([])
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    useEffect(() => {
      getAll('admin').then((res)=>{
        setData(res.data)
      })
    }, [])
    const handleForm = (e)=>{
        e.preventDefault()
        const newData = data.filter((item)=>item.admin === nome && item.senha === senha)
        console.log(newData)
        if(nome && senha){
            if(newData.length != 0){
                sessionStorage.setItem('admin', JSON.stringify(newData))
                router.push('/admin/dashboard')
            }else{
                alert('Usuário não encontrado!')
            }
        }else{
            alert('Preencha todos os campos!')
        }
        
    }
    return(
        <div className={"d-flex "+ background.Container}>
            <form style={{width:'500px', height:'400px'}} className="shadow p-3 mb-5 bg-body rounded" onSubmit={handleForm}>
                <li className={background.sideLogo}>
                    <h1 className="logo me-auto text-center" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                </li>
                <label htmlFor="" className='mt-5 text-muted'>Nome de Usuario</label>
                <input value={nome} onChange={(e)=>setNome(e.target.value)} type='text' className=' mt-1 form-control' />
                <label htmlFor="" className='mt-3 text-muted'>Senha</label>
                <input value={senha} onChange={(e)=>setSenha(e.target.value)} type='password' className=' mt-1 form-control' />
                <button className='btn btn-primary mt-3'>Entrar</button>
            </form>
        </div>
    )
}

