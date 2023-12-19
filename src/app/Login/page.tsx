"use client"

import SignIn from "./components/login/SignIn"
import SignUp from "./components/register/SignUp"
import "./components/login.geral.css"
import React from "react"
import { useState } from "react"

const Login = () => {
    const [panel,setPanel] = React.useState('');
    const alterar = () => {
        if(panel === '')
            setPanel('right-panel-active')
        else
            setPanel('')
    }

    return(
        <>
            <div className="body">
                <div className={"container-login "+ panel} id="container"> 
                    <div className="form-container sign-up-container">
                        <SignUp/>
                    </div>
                    <div className="form-container sign-in-container">
                        <SignIn/>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className="h1">Bem vindo de volta!</h1>
                                <p className="p">Para entrar, insira  suas informações pessoais</p>
                                <button className="ghost button" onClick={alterar} id="signIn">Entrar</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className="h1">Olá, Amigo!</h1>
                                <p className="p">Insira seus dados pessoais e comece sua jornada conosco</p>
                                <button className="ghost button" onClick={alterar} id="signUp">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login 
