"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import Navu from "./components/navbar/Navu";
import Sidebar from "./components/sidebar/Sidebar";
import Herou from "./components/hero/Herou";
import Offeru from "./components/offer/Offeru";
import "./layout.css"
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import getById from "@/app/services/getbyId";
const UserHome = () => {
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
        !sessionStorage.user  ? router.push('/login'):
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    <Herou/>
                    <Offeru/> 
                </div>
                
            </div>
            
        </>
    )
}

export default UserHome