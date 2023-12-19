const SignIn = () =>{
    return(
        <>
            <form className="form" action="#">
                        <h1 className="h1">Sign in</h1>
                        <input className="input" type="email" placeholder="Email" />
                        <input className="input" type="password" placeholder="Password" />
                        <a className="a" href="#">Esqueceu a senha?</a>
                        <button className="button">Entrar</button>
                    </form>
        </>
    )
}

export default SignIn
