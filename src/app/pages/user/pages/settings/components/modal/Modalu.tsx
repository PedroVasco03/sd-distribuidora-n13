import style from './modal.module.css';

interface DadosUsuario {
    nome: string;
    email: string;
    telefone: string;
    senhaVelha: string;
    senhaNova: string;
    municipio: string;
    bairro: string;
    rua: string;
}

const Modal: React.FC = () => {
    const handleAlterarDados = () => {
        const nome = (document.getElementById('name') as HTMLInputElement)?.value.trim();
        const email = (document.getElementById('email') as HTMLInputElement)?.value.trim();
        const telefone = (document.getElementById('telefone') as HTMLInputElement)?.value.trim();
        const senhaVelha = (document.getElementById('senhaVelha') as HTMLInputElement)?.value.trim();
        const senhaNova = (document.getElementById('senhaNova') as HTMLInputElement)?.value.trim();
        const municipio = (document.getElementById('municipio') as HTMLInputElement)?.value.trim();
        const bairro = (document.getElementById('bairro') as HTMLInputElement)?.value.trim();
        const rua = (document.getElementById('rua') as HTMLInputElement)?.value.trim();

        // Verifica se algum campo obrigatório está vazio
        if (!nome || !email || !telefone || !municipio || !bairro || !rua) {
            alert('Preencha todos os campos obrigatórios.');
            return;
        }

        // Validação do email usando regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Validação do telefone usando regex
        const telefoneRegex = /^\d{10}$/;
        if (!telefoneRegex.test(telefone)) {
            alert('Por favor, insira um número de telefone válido (10 dígitos).');
            return;
        }

        // Validação da senha - por exemplo, garantindo que tenha pelo menos 8 caracteres
        if (senhaNova.length < 8) {
            alert('A senha deve ter pelo menos 8 caracteres.');
            return;
        }

        // Enviar os dados para a alteração no banco de dados
        const dadosParaAlterar: DadosUsuario = { nome, email, telefone, senhaVelha, senhaNova, municipio, bairro, rua };
        console.log('Dados para alteração:', dadosParaAlterar);
    };

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
                                        <label htmlFor="senhaVelha" className="col-form-label">Senha velha:</label>
                                        <input type="password" className="form-control" id="senhaVelha" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senhaNova" className="col-form-label">Senha nova:</label>
                                        <input type="password" className="form-control" id="senhaNova" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="municipio" className="col-form-label">Município:</label>
                                    <input type="text" className="form-control" id="municipio" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bairro" className="col-form-label">Bairro:</label>
                                    <input type="text" className="form-control" id="bairro" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rua" className="col-form-label">Rua:</label>
                                    <input type="text" className="form-control" id="rua" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleAlterarDados}>Alterar dados</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
