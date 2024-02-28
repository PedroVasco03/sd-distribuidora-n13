"use client"
import { useState } from 'react'
import style from './modal.module.css'
import update from '@/app/services/update'
import { useRouter } from 'next/navigation'

const Modal = () => {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const router = useRouter()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nome !="" && senha!=""){
           const dado = JSON.parse(sessionStorage.admin)
           const data = {
                nome: nome, 
                senha: senha
           }
           update('admin', dado[0].id, data) 
           sessionStorage.removeItem('admin')
           router.push('/admin/login')
        }
        else{
            alert('Preencha todos os campos!')
        }
    }
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
                                    <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} className="form-control" id="name" />
                                </div>
                                <div className="d-flex row">
                                    <div className="mb-3">
                                        <label htmlFor="password" className="col-form-label">Senha:</label>
                                        <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} className="form-control" id="password" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Alterar dados</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal