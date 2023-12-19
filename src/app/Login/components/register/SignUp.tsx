"use client"

import React from "react"
import { useState } from "react"
import img from "../../assets/images/next.png"
import img2 from "../../assets/images/back.png"
import Image from "next/image"

const SignUp = () =>{
    const[clas,setClas]= React.useState('grupo1')
    const[clas2,setClas2]= React.useState('')
    const next = () => {
        if(clas === 'grupo1')
            setClas('')
        else
            setClas('grupo1')

        if(clas2 === '')
            setClas2('grupo1')
        else
            setClas2('')
    }
    return(
        <>
            <form className="form" action="#">
                <h1 className="h1">Criar Conta</h1>
                {/* nome,email,senha,nva,rua,municipio,contacto,bairro */}
                <div className={"grupo "+clas}>
                    <input className="input" type="text" placeholder="Nome" />
                    <input className="input" type="email" placeholder="Email" />
                    <input className="input" type="tel" placeholder="Contacto" />
                    <input className="input" type="text" placeholder="Município" />
                    <br/><Image src={img} onClick={next} className="btnI btnNext" alt="btnNext"/>
                </div>
                

                <div className={"grupo "+clas2}>
                    <input className="input" type="text" placeholder="Bairro" />
                    <input className="input" type="text" placeholder="Rua" />
                    <input className="input" type="password" placeholder="Senha" />
                    
                    <button className="btnCadastro button">Cadastrar</button> <br/>
                    <Image src={img2} onClick={next} className="btnI btnPrev" alt="btnPrev"/>
                </div>
                
            </form>
        </>
    )
}

export default SignUp
