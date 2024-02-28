"use client"
import MainRoot from './components/main'
import Aside from '../components/aside'
import index from '../styles/index.module.css' 
import { useRouter } from 'next/navigation'

export default function Dashboard(){
    const router = useRouter()
    return(
      !sessionStorage.admin ? router.push('/admin/login') :
        <div className={index.Main}>
          <Aside  />
          <MainRoot />
        </div>
    )
}