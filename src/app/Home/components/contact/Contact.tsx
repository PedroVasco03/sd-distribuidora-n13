"use client";
import React from "react"
import { useState } from "react"
import style from "./contact.module.css"

const Contact = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [empynome, setEmpynome] = React.useState('')
    const [empyemail, setEmpyemail] = React.useState('')
    const [empymessage, setEmpymessage] = React.useState('')
    return(
        <>
             <div id="contact" className={style.form_2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Informação de contacto</h2>
                            <ul className={style.list_unstyled+" li-space-lg"}>
                                <li className={style.address}>Não hesite em nos ligar ou enviar uma mensagem pelo formulário de contato</li>
                                <li><i className={style.fas+" fas fa-map-marker-alt"}/>Samba Mutamba, Luanda, Angola, AO</li>
                                <li><i className={style.fas+" fas fa-phone"}/><a className="turquoise" href="tel:003024630820">+244 992-177-520</a></li>
                                <li><i className={style.fas+" fas fa-envelope"}/><a className="turquoise" href="mailto:office@evolo.com">santosd07@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={style.map_responsive}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6954990299337!2d13.227600673863092!3d-8.814650290166965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f35d7358f48f%3A0x7a442b962404a39e!2sMutamba!5e0!3m2!1spt-PT!2sao!4v1702236016750!5m2!1spt-PT!2sao"  style={{border:'0'}}  loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                            <form id="contactForm" data-toggle="validator" data-focus="false">
                                <div className={style.form_group}>
                                    <input type="text" className={style.form_control_input+" "+empynome} id="cname" required
                                     onChange={
                                        (event) => {
                                        setNome (event.target.value)
                                        if(nome === ''){
                                            setEmpynome('')
                                        }else{
                                            setEmpynome('contact_notEmpty__GIj8s') 
                                        }}}/>
                                    <label className={style.label_control} >Name</label>
                                    <div className={style.help_block+" "+ style.with_errors}></div>
                                </div>
                                <div className={style.form_group}>
                                    <input type="email" className={style.form_control_input+" "+empyemail} id="cemail" required
                                     onChange={
                                        (event) => {
                                        setEmail (event.target.value)
                                        if(email === ''){
                                            setEmpyemail('')
                                        }else{
                                            setEmpyemail('contact_notEmpty__GIj8s') 
                                        }}}/>
                                    <label className={style.label_control} >Email</label>
                                    <div className={style.help_block+" "+ style.with_errors}></div>
                                </div>
                                <div className={style.form_group}>
                                    <textarea className={style.form_control_textarea+" "+empymessage} id="cmessage" required
                                    onChange={
                                        (event) => {
                                        setMessage (event.target.value)
                                        if(message === ''){
                                            setEmpymessage('')
                                        }else{
                                            setEmpymessage('contact_notEmpty__GIj8s') 
                                        }}}
                                    />
                                    <label className={style.label_control} >Your message</label>
                                    <div className={style.help_block+" "+ style.with_errors}></div>
                                </div>
                                <div className={style.form_group+" checkbox"}>
                                    <input type="checkbox" id="cterms" checked value="Agreed-to-Terms" required/>Li e concordo com a <a href="#">Política de Privacidade</a> e os <a href="#">Termos e condições</a> declarados pela SDd.
                                    <div className={style.help_block+" "+ style.with_errors}></div>
                                </div>
                                <div className={style.form_group}>
                                    <button type="submit" className={style.form_control_submit_button}>SUBMIT MESSAGE</button>
                                </div>
                                <div className="form-message">
                                    <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </form>
                            

                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact