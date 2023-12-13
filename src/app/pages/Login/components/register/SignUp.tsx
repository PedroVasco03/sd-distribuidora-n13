"use client"

import React from "react"
import { useState } from "react"
import img from "../../assets/images/next.png"
import Image from "next/image"

const SignUp = () =>{
    const[clas,setClas]= React.useState('grupo1')
    const next = () => {
        if(clas === 'grupo1')
            setClas('grupo2')
    }
    return(
        <>
            <form action="#">
                <h1>Criar Conta</h1>
                {/* nome,email,senha,nva,rua,municipio,contacto,bairro */}
                <div className="grupo1">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Contacto" />
                    <input type="text" placeholder="Município" />
                    <Image src={img} alt="btnAvanço"/>
                </div>
                

                <div className="grupo2">
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Rua" />
                    <input type="password" placeholder="Senha" />
                    <button>Cadastrar</button>
                </div>
                
            </form>
        </>
    )
}

export default SignUp
