"use client"
import style from './chat.module.css'
import Image from 'next/image'
import Link from 'next/link'
import i1 from '../../assets/images/logoS.png'
import i2 from '../../assets/images/logo.png'
import i3 from '../../assets/images/profile_user.png'
import getAll from '@/app/services/getAll'
import { useEffect, useState } from 'react'
import post from '@/app/services/post'
const Chatu = () => {
   useEffect(()=>{
        fetchData()
   })
    const [user, setUser] = useState(!sessionStorage.admin ? '' : JSON.parse(sessionStorage.admin))
    const [file, setFile] = useState('')
    const [message, setMessage] = useState('')
    const [data, setData] = useState<any[]>([])
    const fetchData = async ()=>{
        getAll('message').then((res)=>{
            setData(res.data)
        })
    }
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP","OCT", "NOV", "DEC"];
    const handleSendMessage = () => {
      const date = new Date()
      if(message!=''){
        const time = date.getHours()+":"+date.getMinutes()+"  "+date.getDate()+"/"+monthNames[date.getMonth()]+"/"+date.getFullYear()
        setMessage('');
      }else
          alert('Mensagem não pode ser vazia!')
    };

    const postData = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const date = new Date()
        if(user && message!=''){
            const time = date.getHours()+":"+date.getMinutes()+"  "+date.getDate()+"/"+monthNames[date.getMonth()]+"/"+date.getFullYear()
            const data = {
                remitente: user[0].nome,
                destinatario: 'admin',
                sms: message,
                datanow: time, 
                ficheiro: file
            }     
            post('message', data)
            setMessage('');
        }else
            alert('Mensagem não pode ser vazia!')
            
    }
    return(
        <form onSubmit={postData}>
            <div className="Container">
                <div className={style.chat}>
                    <div className={style.chatHeader}>
                        <div className={style.chatImage}>
                            <Image src={i1} alt='perfil' />
                            <span className={style.online}></span>
                        </div>
                        <div className={style.chatInfo}>
                            <div className={style.chatName}>
                                <h2>SDD Comunity</h2>
                            </div>
                            <div className={style.chatStatus}>
                                <small className={style.smalText}>Fale com outros clientes e ADM
                                 compartilhe suas dificuldades e fique a par de tudo</small>
                            </div>
                        </div>
                    </div>

                    <div className={style.chatBody}>
                        {data.map(item => (
                            item.remitente != user[0].nome || item.destinatario != "admin" ?     
                            <div className="d-flex justify-content-start mb-5 mt-5">
                                <div className={style.img_cont_msg}>
                                    <Image className={"rounded-circle "+style.user_img_msg} alt='user' src={i3}/>
                                </div>
                                <div className={style.msg_cotainer +" "+style.msg}>
                                    <span className={style.username}>{item.remitente}</span>
                                        {item.sms}
                                    <span className={style.msg_time}>{item.datanow}</span>
                                </div>
                            </div>
                            :
                            <div className="d-flex justify-content-end mb-5 mt-5">
                                <div className={style.msg_cotainer_send +" "+style.msg}>
                                    <span  className={style.usernameI}>SDD - ADM {item.remitente}</span>
                                        {item.sms}
                                        <br />
                                        <span className={style.msg_time_send}>{item.datanow}</span>
                                </div>
                                <div className={style.img_cont_msg}>
                                    <Image className={"rounded-circle "+style.user_img_msg} alt='ADm' src={i1}/>
                                </div>
                            </div>
                            
                            
                        ))}
                    </div>
                    <div className={style.chatFooter}>
                     <div className={style.chatInput}>
                        <div className={style.inputGroup}>
                            <div className={style.inputGroupAddon}>
                                <input type="file" name="" id='arquivo' value={file} onChange={(e)=>setFile(e.target.value)}/>
                                <label className='fas fa-paperclip' htmlFor="arquivo" style={{cursor:'pointer'}}></label>
                            </div>
                            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="" className={style.formControl} placeholder="Digite sua mensagem" id="" ></textarea>
                            <button type='submit'  className={style.inputGroupAddon}>
                                    <i className='fas fa-paper-plane'></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Chatu