import Link from "next/link"

const SignIn = () =>{
    return(
        <>
            <form className="form" action="#">
                        <h1 className="h1">Sign in</h1>
                        <input className="input" type="email" placeholder="Email" />
                        <input className="input" type="password" placeholder="Password" />
                        <a className="a" href="#">Esqueceu a senha?</a>
                        <Link href="../pages/user/pages" ><button className="button">Entrar</button></Link> 
                    </form>
        </>
    )
}

export default SignIn
