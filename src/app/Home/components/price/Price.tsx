import style from "./price.module.css"

const Price = () => {
    return(
        <>
            <div id="prices" className={style.cards_2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Multiplas Opções de Preços</h2>
                            <p className="p-heading p-large">Preparamos planos de preços para todos os orçamentos para que você possa pedir imediatamente. <br /> Eles são ótimos para pequenas empresas, grandes organizações e consumo familiar.</p>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className={style.card+" card"}>
                                <div className={style.card_body+" card-body"}>
                                    <div className={style.card_title+" card-title"}>PEQUENO</div>
                                    <div className={style.card_subtitle+" card-subtitle"}>1.000 à 5.000 <span style={{color:'#00bfd8', fontWeight:'600'}}>(L)</span></div>
                                    <hr className={style.cell_divide_hr}/>
                                    <div className={style.price}>
                                        <span className={style.currency}>$</span><span className={style.value}>9,61</span>
                                        <div className={style.frequency}>por abastecimento</div>
                                    </div>
                                    <hr className={style.cell_divide_hr}/>
                                    <ul className={style.list_unstyled+" "+ style.li_space_lg}>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Para Tanques</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Para Piscinas</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-times "+style.fa_times}></i><div className={style.media_body}>Limpeza Incluída</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-times "+style.fa_times}></i><div className={style.media_body}>Produto Para Tratamento</div>
                                        </li>
                                        
                                    </ul>
                                    <div className={style.button_wrapper}>
                                        <a className="btn_solid_lg" href="#request">SOLICITAR</a>
                                    </div>
                                </div>
                            </div> 

                            <div className={style.card+" card"}>
                                <div className={style.label}>
                                    <p className={style.best_value}>+ Solicitado</p>
                                </div>
                                <div className={style.card_body+" card-body"}>
                                    <div className={style.card_title+" card-title"}>MÉDIO</div>
                                    <div className={style.card_subtitle+" card-subtitle"}>6.000 à 12.000 <span style={{color:'#00bfd8', fontWeight:'600'}}>(L)</span></div>
                                    <hr className={style.cell_divide_hr}/>
                                    <div className={style.price}>
                                        <span className={style.currency}>$</span><span className={style.value}>21,62</span>
                                        <div className={style.frequency}>por abastecimento</div>
                                    </div>
                                    <hr className={style.cell_divide_hr}/>
                                    <ul className={style.list_unstyled+" "+ style.li_space_lg}>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Para Tanques</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Para Piscinas</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Limpeza Incluída</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-times "+style.fa_times}></i><div className={style.media_body}>Produto Para Tratamento</div>
                                        </li>
                                        
                                    </ul>
                                    <div className={style.button_wrapper}>
                                        <a className="btn_solid_lg" href="#request">SOLICITAR</a>
                                    </div>
                                </div>
                            </div> 
                            
                            <div className={style.card+" card"}>
                            <div className={style.label}>
                                    <p className={style.best_value} style={{backgroundColor:'#cad800'}}>Empresarial</p>
                                </div>
                                <div className={style.card_body+" card-body"}>
                                    <div className={style.card_title+" card-title"}>GRANDE</div>
                                    <div className={style.card_subtitle+" card-subtitle"}>Mais de 12.000 <span style={{color:'#00bfd8', fontWeight:'600'}}>(L)</span></div>
                                    <hr className={style.cell_divide_hr}/>
                                    <div className={style.price}>
                                        <span className={style.currency}>$</span><span className={style.value}>0...</span>
                                        <div className={style.frequency}>por abastecimento</div>
                                    </div>
                                    <hr className={style.cell_divide_hr}/>
                                    <ul className={style.list_unstyled+" "+ style.li_space_lg}>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Para Tanques</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Para Piscinas</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Limpeza Incluída</div>
                                        </li>
                                        <li className={style.media}>
                                            <i className={style.fas+" fas fa-check "+style.fas_check}></i><div className={style.media_body}>Produto Para Tratamento</div>
                                        </li>
                                    </ul>
                                    <div className={style.button_wrapper}>
                                        <a className="btn_solid_lg" href="#request">SOLICITAR</a>
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

export default Price