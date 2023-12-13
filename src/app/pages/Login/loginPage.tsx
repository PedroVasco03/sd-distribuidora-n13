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
            <div className={"container "+ panel} id="container"> 
                <div className="form-container sign-up-container">
                    <SignUp/>
                </div>
                <div className="form-container sign-in-container">
                    <SignIn/>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Para entrar, insira  suas informações pessoais</p>
                            <button className="ghost" onClick={alterar} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Olá, Amigo!</h1>
                            <p>Insira seus dados pessoais e comece sua jornada conosco</p>
                            <button className="ghost" onClick={alterar} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
