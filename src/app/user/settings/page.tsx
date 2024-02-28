'use client'
import '../layout.css'
import Navu from "../home/components/navbar/Navu"
import Sidebar from "../home/components/sidebar/Sidebar"
import Profileu from "./components/profile/Profileu";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import getById from '@/app/services/getbyId';

const Profile = () => {
    const [data, setData] = useState({})
    const router = useRouter()
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
    useEffect(() => {
        getData()
    });
    return(
        !sessionStorage.user ? router.push('/login') :
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    <Profileu/>
                </div>
                
            </div>
        </>
    )
}

export default Profile