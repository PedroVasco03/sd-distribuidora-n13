import style from './hero.module.css';
import Image from 'next/image';
import i1 from '../../assets/images/header-teamwork.svg'
import Link from 'next/link';

const Hero = () =>{
    return(
        <>            
                <header id="hero" className={"header "+ style.header}>
                    <div className={"header-content "+ style.header_content}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={style.text_container}>
                                        <h1 style={{ color: '#00bfd8', position:'relative'}}>SD'Distribuidora <br /><span className={style.turquoise} >QUALIDADE QUE GERA CONFIANÇA</span></h1>
                                        <p className={"p-large "+ style.p_large} style={{ color: '#626262'}}>Olá, seja bem vindo ao nosso sistema, fique a par de todas as novidades,
                                         Chegue mais perto, clique no botão a baixo e conheça tudo que o nosso sistema proporciona para si consumidor.</p>
                                        
                                        <Link href="/login" className="btn_solid_lg page-scroll">ENTRAR AGORA</Link>
                                    </div>                            
                                    </div>                                
                                    <div className="col-lg-6">
                                    <div className={"image-container "+ style.image_container}>
                                        <Image className='img-fluid' alt='Hero-image' src={i1}/>
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </div> 
                </header> 
            
        </>
    )
}

export default Hero