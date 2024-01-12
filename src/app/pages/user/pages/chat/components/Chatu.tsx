import style from './chat.module.css'
import Image from 'next/image'
import Link from 'next/link'
import i1 from '../assets/images/logoS.png'
import i2 from '../assets/images/logo.png'
import i3 from '../assets/images/profile_user.png'

const Chatu = () => {
    return(
        <>
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
                        <div className="d-flex justify-content-start mb-5 mt-5">
                            <div className={style.img_cont_msg}>
                                <Image className={"rounded-circle "+style.user_img_msg} alt='user' src={i3}/>
                            </div>
                            <div className={style.msg_cotainer +" "+style.msg}>
                                <span className={style.username}>João Andre</span>
                                    Boa Noite preciso de confirmação de qualidade
                                <span className={style.msg_time}>12-01-024, 19:15</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start mb-5 mt-5">
                            <div className={style.img_cont_msg}>
                                <Image className={"rounded-circle "+style.user_img_msg} alt='user' src={i3}/>
                            </div>
                            <div className={style.msg_cotainer +" "+style.msg}>
                                <span className={style.username}>Filipe José</span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, expedita. Dolore dolores, obcaecati architecto ea quia mollitia expedita sequi consequuntur a harum! Asperiores autem modi aperiam reiciendis omnis! Dolorem, et.
                                <span className={style.msg_time}>12-01-024, 19:35</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mb-5 mt-5">
                            <div className={style.msg_cotainer_send +" "+style.msg}>
                                <span className={style.usernameI}>SDD - ADM</span>
                                    Boa Noite preciso de confirmação de qualidade
                                <span className={style.msg_time_send}>12-01-024, 19:15</span>
                            </div>
                            <div className={style.img_cont_msg}>
                                <Image className={"rounded-circle "+style.user_img_msg} alt='ADm' src={i1}/>
                            </div>
                        </div>
                    </div>

                    <div className={style.chatFooter}>
                     <div className={style.chatInput}>
                        <div className={style.inputGroup}>
                            <div className={style.inputGroupAddon}>
                                <input type="file" name="" id='arquivo'/>
                                <label className='fas fa-paperclip' htmlFor="arquivo" style={{cursor:'pointer'}}></label>
                            </div>
                            <textarea name="" className={style.formControl} placeholder="Digite sua mensagem" id="" ></textarea>
                            <div className={style.inputGroupAddon}>
                                <i className='fas fa-paper-plane'></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatu