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
                                        <p className={"p-large "+ style.p_large} style={{ color: '#626262'}}> consectetur adipisicing elit. Autem earum neque asperiores incidunt quos similique quisquam doloribus, natus, reiciendis accusamus tempore provident nam numquam molestias</p>
                                        
                                        <Link href="/pages/login" className="btn_solid_lg page-scroll">ENTRAR AGORA</Link>
                                    </div>                            
                                    </div>                                
                                    <div className="col-lg-6">
                                    <div className={"image-container "+ style.image_container}>
                                        <Image className='img-fluid' alt='' src={i1}/>
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