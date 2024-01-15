import style from './modal.module.css'

const Modal = () => {
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <h5 className="modal-title" id="staticBackdropLabel">Alterar dados do Usuário</h5>
                                <small className='text-danger'>* AS INFORMAÇÕES EM BRANCO NÃO SERÃO ALTERADAS *</small>
                            </div>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefone" className="col-form-label">Telefone:</label>
                                    <input type="text" className="form-control" id="telefone" />
                                </div>
                                <div className="d-flex row">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="col-form-label">Senha velha:</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="col-form-label">Senha nova:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Município:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Bairro:</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Rua:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Alterar dados</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal