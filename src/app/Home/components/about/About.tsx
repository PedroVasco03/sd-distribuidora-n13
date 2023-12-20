import style from "./about.module.css"
import Image from "next/image"
import imagem1 from "../../assets/images/about-img4.jpg"
import imagem2 from "../../assets/images/about-img5.jpg"
import Link from "next/link"
const About = () => {
    return(
        <>
             {/* about section  */}
                <section id="about" className={style.about_section +" "+ style.layout_padding}>
                    <div className="container">
                        <div className={style.row+" row"}>
                            <div className="col-md-6">
                                <div className={style.detail_box+" detail-box"}>
                                    <div className={style.heading_container}>
                                        <h2>Sobre Nós</h2>
                                    </div>
                                    <p >A Santos Distribuidora é uma empresa cujos objetivos principais são a sua satisfação
                                        e bem-estar, ao nosso lado você aproveita da mais rica qualidade nacional, disciplina e higiene
                                        embarque conosco numa jornada divertida e organizada, efetue o seu pedido e deixe a sua opinião
                                        estamos aqui para servir, então o que será?</p>
                                    <Link href="/Login" className="btn_solid_lg page-scroll">ENTRAR</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={style.img_container}>
                                    <div className={style.img_box +" img-box "+style.b1}>
                                        <Image src={imagem1} className={style.img+ " img-fluid"} alt="" />
                                    </div>
                                    <div className={style.img_box +" img-box "+style.b2}>
                                        <Image src={imagem2} className={style.img+" img-fluid"} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            {/* end about section  */}
        </>
    )
}

export default About