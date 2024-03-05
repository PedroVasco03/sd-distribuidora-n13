import { useState, FormEvent } from 'react';
import style from './modal.module.css';
import update from '@/app/services/update';
import { useRouter } from 'next/navigation';

const NomeUpdate: React.FC = () => {
    const [session, setSession] = useState(!sessionStorage.user ? [] : JSON.parse(sessionStorage.user))
    const [nome, setNome] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const router = useRouter();

    // Expressão regular para validar o nome (permite letras, espaços e hífens)
    const nomeRegex = /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*(?:-[a-zA-ZÀ-ÿ]+)*$/;

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Verifica se o nome e a senha foram preenchidos
        if (nome && senha) {
            // Verifica se a senha corresponde à senha do usuário atual
            if (senha === session[0].senha) {
                // Verifica se o nome corresponde ao formato válido
                if (nomeRegex.test(nome)) {
                    const dado = JSON.parse(sessionStorage.user);
                    const data = {
                        nome: nome,
                        senha: senha
                    };
                    update('usuario', dado[0].id, data);
                    sessionStorage.removeItem('user');
                    router.push('/login');
                } else {
                    alert('Nome inválido. Por favor, insira um nome válido.');
                }
            } else {
                alert('Impossível alterar, SENHA ERRADA');
            }
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return (
        <>
            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <h5 className="modal-title" id="staticBackdropLabel">Alterar nome do Usuário</h5>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Nome:</label>
                                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="name"/>
                                </div>
                                <div className="d-flex row">
                                    <small className='text-danger'>* SENHA PARA CONFIRMAR *</small>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="col-form-label">Senha:</label>
                                        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="password" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Alterar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NomeUpdate;
