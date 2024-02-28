"use client"
import Navu from "../home/components/navbar/Navu"
import Sidebar from "../home/components/sidebar/Sidebar"
import '../layout.css'
import Image from "next/image"
import image from '../assets/images/chat.jpg'
import { useRouter } from "next/navigation"
import Chatu from "./components/Chatu"
import getById from "@/app/services/getbyId"
import { useEffect, useState } from "react"
const Comunity = () => {
    const router = useRouter()
    const [data, setData] = useState({})
    const getData = async()=>{
        if(sessionStorage.user){
            const dado = JSON.parse(sessionStorage.user)
            await getById('usuario', dado[0].id).then((res)=>{
                setData(res.data)
                if(res.data.permissao =='restrito'){
                    router.push('/login')
                }
            }).catch((err)=>{
                router.push('/login')
            })
        }
    }
    useEffect(()=>{
        getData()
    })
    return(
        !sessionStorage.user ? router.push('/login'):
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                        <Chatu />
                </div>
                
            </div>
            </>
    )
}

export default Comunity