import style from './offer.module.css'
import Image from 'next/image'
import i1 from '../../assets/images/icon1.png'
import i2 from '../../assets/images/icon2.png'
import i3 from '../../assets/images/icon3.png'
import i4 from '../../assets/images/icon4.png'
import i5 from '../../assets/images/icon5.png'
import i6 from '../../assets/images/icon6.png'

const Offeru = () => {
    return(
        <>
            <div id="services" className={style.services+" "+ style.section}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className={style.section_heading}>
                        <h6>Outros serviços</h6>
                        <h4>O que a nossa distribuidora <em>oferece</em></h4>
                        <div className={style.line_dec}></div>
                    </div>
                    </div>
                    <div className="col-lg-12">
                    <div className={style.naccs}>
                        <div className="grid">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className={style.menu}>
                                <div className={style.first_thumb+" "+ style.active+" "+style.card}>
                                    <div className={style.thumb}>
                                        <span className={style.icon}><Image src={i1} alt=""/></span>
                                        Segurança
                                    </div>
                                </div>
                                <div className={style.card}>
                                    <div className={style.thumb}>                 
                                        <span className={style.icon}><Image src={i2} alt=""/></span>
                                        Facilidade
                                    </div>
                                </div>
                                <div className={style.card}>
                                <div className={style.thumb}>                 
                                    <span className={style.icon}><Image src={i6} alt=""/></span>
                                    Organização
                                </div>
                                </div>
                                <div className={style.card}>
                                <div className={style.thumb}>                 
                                    <span className={style.icon}><Image src={i4} alt=""/></span>
                                    Rendimento
                                </div>
                                </div>
                                <div className={style.last_thumb+" "+style.card}>
                                <div className={style.thumb}>                 
                                    <span className={style.icon}><Image src={i5} alt=""/></span>
                                    Satisfação
                                </div>
                                </div>
                            </div>
                            </div> 
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

export default Offeru