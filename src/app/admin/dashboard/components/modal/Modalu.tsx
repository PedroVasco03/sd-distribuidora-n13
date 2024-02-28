"use client"
import { useState } from 'react'
import style from './modal.module.css'
import { useRouter } from 'next/navigation'
import update from '@/app/services/update'
import deleteUser from '@/app/services/delete'
const Modal = ({permissao, id}) => { 
    const [senha, setSenha] = useState('') 
    const patchData = ()=>{
        const dado = JSON.parse(sessionStorage.admin)
        if(senha == dado[0].senha){
            if(permissao !="deletado"){
                update('usuario', id, {
                    permissao: permissao
                })
                alert('Permissão  Alterada');
                location.reload();
            }
            else{
                deleteUser('usuario', id)
                alert('Usuario Deletado');
                location.reload();
            }
            
        }
        else{
            alert('Senha Incorrecta!')
        }
    }  
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <h2 className=''>Verificação de senha</h2>
                            </div>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input value={senha} onChange={(e)=>setSenha(e.target.value)} type='password' className='form-control' placeholder='Confirme a senha'/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-secondary" onClick={patchData}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal