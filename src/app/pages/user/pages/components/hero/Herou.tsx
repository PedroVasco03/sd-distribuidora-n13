import style from './hero.module.css'
import Image from 'next/image'
import i1 from '../../assets/images/slider.png'
import Link from 'next/link'

const Herou = () => {
    return(
        <>
            <div className={style.main_banner} id="heroU" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                        <div className={style.left_content+" header-text"} data-wow-duration="1s" data-wow-delay="1s">
                            <div className="row">
                            <div className="col-lg-12">
                                <h6>Santos D. Distribuidora</h6>
                                <h2>Bem vindo ao futuro da distribuição nacional</h2>
                                <p> A nossa empresa proporciona atendimento de qualidade
                                    máxima, desde profissionais qualificados a fontes de 
                                    abestecimento de águas recomendadas para seu consumo,
                                    nossos métodos de tratamento são súper seguros e eficazez.</p>
                            </div>
                            <div className="col-lg-12">
                                <div className={style.border_first_button}>
                                <Link className={style.a} href="/pages/user/pages/request">Fazer pedido</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className={style.right_image+" img-fluid"} >
                            <Image src={i1}  className={style.img} alt=""/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Herou