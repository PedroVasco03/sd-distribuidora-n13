"use client"
import Navu from "../home/components/navbar/Navu"
import Offeru from "../home/components/offer/Offeru"
import Sidebar from "../home/components/sidebar/Sidebar"
import '../layout.css'
import Image from "next/image"
import image from '../assets/images/pedidos.jpg'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import post from "@/app/services/post"
import getAll from "@/app/services/getAll"
import deleteId from '@/app/services/delete'
import getById from "@/app/services/getbyId"
const Request = () => {
    const [filter, setFilter] = useState({})
    const getData = async()=>{
        const dado = JSON.parse(sessionStorage.user)
        await getById('usuario', dado[0].id).then((res)=>{
            setFilter(res.data)
        })
    }
    useEffect(()=>{
        getData()
        fetchData()
    })
    const router = useRouter()
    const [plano, setPlano] = useState('')
    const [telefone, setTelefone] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [data, setData] = useState([])
    const fetchData = async ()=>{
       if(sessionStorage.user){
        const response = await getAll('pedido').then((res)=>{
            if(res.data.permissao == 'restrito'){
                router.push('/login')
            } 
            return res.data
        }).catch((err)=>{
            router.push('/login')
        })
        const nome = JSON.parse(sessionStorage.user)
        const newData = response.filter((item)=> item.cliente === nome[0].nome)
        setData(newData)
       }
    }
    const handleForm = (e)=>{
        e.preventDefault()
        if(plano && telefone && localidade){
            const nome = JSON.parse(sessionStorage.user)
            const data = {
                cliente: nome[0].nome,
                plano: plano,
                telefone: telefone,
                localidade: localidade
            }
            post('pedido', data)
        }
        else{
            alert('Preencha todos os campos')
        }
    }
    const deleteData = async (id)=>{
        await deleteId('pedido', id)
        alert('Eliminado com sucesso')
    }
    return(
        !sessionStorage.user ? router.push('/login'):
        <>
             <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                   <div className="d-flex">
                        <div className="p-3">
                            <h4 className="p-3">Pedidos</h4>
                            <p className="p-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam voluptatibus quibusdam quasi doloremque consequuntur culpa nam tenetur necessitatibus eos magnam aliquid, quo repellat iste eaque inventore? Culpa, impedit id!</p>
                        </div>
                        <div>
                            <Image src={image} alt="pedidos" width={600} />
                        </div>
                   </div>
                   <form style={{width:'70%', margin:'0 auto'}} onSubmit={handleForm}>
                        <h2 className="text-center">Formulário de Pedido</h2>
                        <div className="form-group p-3">
                            <select name="" id="" className="form-select my-2"  onChange={(e)=>setPlano(e.target.value)}>
                                <option value="" >Selecione o plano</option>
                                <option value="pequeno">Pequeno</option>
                                <option value="médio">Médio</option>
                                <option value="grande">Grande</option>
                            </select>
                            <input type="tel" value={telefone} placeholder="Telefone" onChange={(e)=>setTelefone(e.target.value)} className="form-control"/>
                            <input type="text" value={localidade} onChange={(e)=>setLocalidade(e.target.value)} placeholder="Localidade" className="form-control my-2"/>
                            <button className="btn btn-primary m-1">enviar</button>
                        </div>
                   </form>
                    <div className="m-4">
                        <h4 className="text-center">Pedidos</h4>
                        {data.map((item)=>(
                            <div className="shadow shadow-rounded p-3">
                                <p>{item.cliente}</p>
                                <p>{item.plano}</p>
                                <p>{item.telefone}</p>
                                <p>{item.localidade}</p>
                                <button onClick={()=>deleteData(item.id)} className="btn btn-sm btn-danger">eliminar</button>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </>
        </>
    )
}

export default Request