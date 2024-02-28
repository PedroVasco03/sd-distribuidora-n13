"use client"
import aside from '../aside.module.css'
import Image from "next/image";
import background from '../background.module.css'
import { useEffect, useState } from 'react' 
import getAll from '@/app/services/getAll';
import post from '@/app/services/post';
export default function CreateAccount(){
    const [data, setData] = useState([])
    const [admin, setAdmin] = useState('')
    const [senha, setSenha] = useState('')
    useEffect(() => {
      getAll('admin').then((res)=>{
        setData(res.data)
      })
    }, [])
    const handleForm = (e)=>{
        e.preventDefault()
        const newData = data.filter((item)=> item.admin === admin)
        if(newData.length == 0){
            if(admin && senha){
                const item = {
                    admin: admin,
                    senha: senha
                }
                post('admin', item)
            }else{
                alert('Preencha todos os campos!')
            }
        }
    }
    return(
        <div className={"d-flex "+ background.Container}>
            <form style={{width:'500px', height:'400px'}} className="shadow p-3 mb-5 bg-body rounded" onSubmit={handleForm}>
                <li className={background.sideLogo}>
                    <h1 className="logo me-auto text-center" style={{ color: '#00bfd8'}}>SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h1>
                </li>
                <label htmlFor="" className='mt-5 text-muted'>Nome de Usuario</label>
                <input value={admin} onChange={(e)=>setAdmin(e.target.value)} type='text' className=' mt-1 form-control' />
                <label htmlFor="" className='mt-3 text-muted'>Senha</label>
                <input value={senha} onChange={(e)=>setSenha(e.target.value)} type='password' className=' mt-1 form-control' />
                <button className='btn btn-primary mt-3'>Salvar</button>
            </form>
        </div>
    )
}