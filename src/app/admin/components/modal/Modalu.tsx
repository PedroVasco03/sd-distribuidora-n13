"use client"
import { useState } from 'react';
import style from './modal.module.css';
import update from '@/app/services/update';
import { useRouter } from 'next/navigation';

interface UserData {
    id: number; // Adicione a propriedade id
    name: string;
    email: string;
    // Adicione outras propriedades do usuário aqui
}

const Modal = () => {
    const [userData, setUserData] = useState<UserData>({
        id: 0, // Defina um valor padrão para o id, ou ajuste conforme necessário
        name: '',
        email: '',
        // Adicione outras propriedades do usuário aqui
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Chame o serviço de atualização com os dados do usuário
        updateUserData(userData);
    };

    const updateUserData = (userData: UserData) => {
        // Faça a chamada para o serviço de atualização
        update('usuario', userData.id, userData).then(() => {
            // Redirecione o usuário para a página desejada após a atualização
            router.push('/dashboard');
        }).catch((error) => {
            console.error('Erro ao atualizar os dados do usuário:', error);
            // Trate os erros de atualização, se necessário
        });
    };

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleFormSubmit}>
                        <div className="modal-header">
                            <div className="row">
                                <h5 className="modal-title" id="staticBackdropLabel">Alterar dados do Usuário</h5>
                                <small className='text-danger'>* AS INFORMAÇÕES EM BRANCO NÃO SERÃO ALTERADAS *</small>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleInputChange} />
                            </div>
                            {/* Adicione outros campos de formulário conforme necessário */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
