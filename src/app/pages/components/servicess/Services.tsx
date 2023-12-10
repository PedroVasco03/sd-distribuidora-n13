import style from "./services.module.css"

const Services = () => {
    return(
        <>
            <section id="services" className={style.services+" "+style.section}>
                <div className="container">

                    <div className={style.section_title} data-aos="fade-up">
                        <h2>Serviços</h2>
                        <p>Em destaque alguns dos nossos principais serviços</p>
                    </div>

                    <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className={style.icon_box} data-aos="fade-up" data-aos-delay="100">
                        <div className={style.icon}><i className="fas fa-hand-holding-droplet"></i></div>
                        <h4 className={style.title}><a href="">Abastecimento de tanques</a></h4>
                        <p className={style.description}>A melhor água para seu consumo encontras só aqui na SDditribuidora, peça já</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className={style.icon_box} data-aos="fade-up" data-aos-delay="200">
                        <div className={style.icon}><i className="fas fa-person-swimming"></i></div>
                        <h4 className={style.title}><a href="">Limpeza de piscinas</a></h4>
                        <p className={style.description}>Profissionais com produtos certificados para cuidar da sua piscina, priorizando sempre a sua saude e bem-estar</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className={style.icon_box} data-aos="fade-up" data-aos-delay="300">
                        <div className={style.icon}><i className="fas fa-water-ladder"></i></div>
                        <h4 className={style.title}><a href="">Abastecimento de piscinas</a></h4>
                        <p className={style.description}>Cristalina e com Salinização mantendo o equilibrio entre diverção e saúde</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className={style.icon_box} data-aos="fade-up" data-aos-delay="400">
                        <div className={style.icon}><i className="fas fa-water"></i></div>
                        <h4 className={style.title}><a href="">Limpeza de tanques</a></h4>
                        <p className={style.description}>Método eficaz e bastante higiénico é sempre a melhor opção, e aqui so trazemos o melhor para o cliente</p>
                        </div>
                    </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Services