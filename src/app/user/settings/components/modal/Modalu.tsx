"use client"
import { useState } from 'react'
import style from './modal.module.css'
import update from '@/app/services/update'
import { useRouter } from 'next/navigation'
const Modal = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [rua, setRua] = useState('')
    const [senha, setSenha] = useState('')
    const [bairro, setBairro] = useState('')
    const router = useRouter()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nome !="" && telefone !="" && municipio !="" && rua !="" && senha !="" && bairro !="" && email !=""){
            const dado = JSON.parse(sessionStorage.user)
            const data = {
                nome: nome,
                telefone: telefone,
                municipio: municipio,
                rua: rua,
                senha: senha,
                bairro: bairro,
                email: email
            } 
            update('usuario', dado[0].id, data)
            sessionStorage.removeItem('user')
            router.push('/login')
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
                                    <input value={nome} onChange={(e)=>setNome(e.target.value)} type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" value={email} onChange={((e)=>setEmail(e.target.value))} className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefone" className="col-form-label">Telefone:</label>
                                    <input type="text" value={telefone} onChange={(e)=>setTelefone(e.target.value)} className="form-control" id="telefone" />
                                </div>
                                <div className="d-flex row">
                                    <div className="mb-3">
                                        <label htmlFor="password" className="col-form-label">Senha:</label>
                                        <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} className="form-control" id="password" />
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="text" className="col-form-label">Município:</label>
                                    <input type="text" value={municipio} onChange={(e)=>setMunicipio(e.target.value)} className="form-control" id="text" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bairro" className="col-form-label">Bairro:</label>
                                    <input type="text" value={bairro} onChange={(e)=>setBairro(e.target.value)} className="form-control" id="bairro" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rua" className="col-form-label">Rua:</label>
                                    <input type="text" value={rua} onChange={(e)=>setRua(e.target.value)} className="form-control" id="rua" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Alterar dados</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal