import style from "./footer.module.css"

const Footer = () => {
    return(
        <>
             <footer id="footer" className={style.footer}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 text-lg-left text-center">
                        <div className="copyright">
                            &copy; Copyright <strong>SDdistribuidora</strong>. Todos direitos reservados
                        </div>
                        <div className="credits">Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/pedro-vasco-939342287/">Vasco</a>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <nav className={style.footer_links+"  text-lg-right text-center pt-2 pt-lg-0"}>
                            <a href="#home" className="scrollto">Home</a>
                            <a href="#about" className="scrollto">Sobre</a>
                            <a href="#">Plítica de Privacidade</a>
                            <a href="#">Termos de Uso</a>
                        </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer