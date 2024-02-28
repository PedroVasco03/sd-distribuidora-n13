"use client"

import getAll from "@/app/services/getAll"
import { useEffect, useState } from "react"

export default function Container(){
    useEffect(()=>{
        fetchData()
    })
    const [data, setData] = useState([])
    const fetchData = async ()=>{
        await getAll('pedido').then((res)=>{
            setData(res.data)
        })
    }
    const title = {
        fontSize: '1.2rem',
        fontWeight: 600,
        margin: '20px'
    }
    return(
        <div className=" m-3 shadow p-3 mb-5 bg-body rounded">
            <h4 className="" style={title}>Pedidos dos Clientes</h4>
            <div className="m-5">
                <table class="table">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Plano</th>
                            <th scope="col">Localidade</th>
                            <th scope="col">Telefone</th>                            
                        </tr>

                    </thead>
                    <tbody>
                        {data.map((item, index)=>(
                            <tr>
                                <td>{index}</td>
                                <td>{item.cliente}</td>
                                <td>{item.plano}</td>
                                <td>{item.localidade}</td>
                                <td>{item.telefone}</td>
                            </tr>
                        ))}     
                    </tbody>
                </table>
            </div>
        </div>
    )
}