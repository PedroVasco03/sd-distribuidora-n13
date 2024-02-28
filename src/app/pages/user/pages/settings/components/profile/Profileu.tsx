import Modal from '../modal/Modalu'
import style from './profile.module.css'

const Profileu = () => {
    return (
        <>
            <div className={style.geral} style={{ }} id="page-content">
                <div className={style.padding}>
                    <div className="row container d-flex justify-content-center align-items-center w-100">
                            <div className={style.card+" card"}>
                                <div className="row">
                                    <div className={style.bg+" col-sm-4 "+style.userprofile}>
                                        <div className={style.cardblock+" text-center text-white"}>
                                            <div className="mb-2">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className={style.imgradius}
                                                    alt="User-Profile-Image" />
                                            </div>
                                            <h6 className="fw-semibold text-capitalize">pedro vasco</h6>
                                            <p className='text-uppercase'>Usuário / ADM</p>
                                        </div>
                                    </div>
                                    <div className={style.bg2+" col-sm-8 "}>
                                        <div className={style.cardblock}>
                                            <h6 className="mb-3 p-b-5 fw-semibold text-center"
                                            style={{borderBottom:'1px solid #e0e0e0'}}>Dados do Usuário</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Nome</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>Pedro Vasco</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Email</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>baltazarpedro092@gmail.com</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Telefone</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>(244) 940-181-339</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Senha</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>********</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Município</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>Cacuaco</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Bairro</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>Cacuaco</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Rua</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>145, Cacuaco</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Nível</p>
                                                    <h6 className={"fw-bold text-warning"}>* USUÁRIO *</h6>
                                                </div>
                                            </div>
                                            <h6 className="mb-2 mt-5 pb-1 fw-semibold text-center" style={{borderBottom:'1px solid #e0e0e0'}}>Estatísticas</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Nº Pedidos</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>00985</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="mb-1 fw-semibold">Efetuados</p>
                                                    <h6 className={"text-muted fw-normal "+style.textmuted}>00978</h6>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex justify-content-end mt-5">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    Editar
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
            <Modal />
        </>
    )
}

export default Profileu