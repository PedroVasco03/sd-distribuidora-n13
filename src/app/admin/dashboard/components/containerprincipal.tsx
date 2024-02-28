import { useEffect, useState } from 'react';
import Card from '../../components/card';
import getAll from '@/app/services/getAll';
import Modal from './modal/Modalu';

export default function ContainerPrincipal() {
    const [data, setData] = useState([]);
    const [permissao, setPermissao] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await getAll('usuario');
            setData(res.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    return (
        <div className="d-flex flex-row justify-content-between">
            <div className='shadow bg-body rounded' style={{ width:'700px', height:'450px', backgroundColor:'blue', margin:'30px', overflow: 'scroll' }}>
                <p className='m-4'>Usuários</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Rua</th>
                            <th scope="col">Senha</th>
                            <th scope='col'>Permissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.contacto}</td>
                                <td>{item.municipio}</td>
                                <td>{item.bairro}</td>
                                <td>{item.rua}</td>
                                <td>{item.senha.substring(0, 3) + '****'}</td>
                                <td>
                                    <button className='m-1 btn btn-sm btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        onClick={() => {
                                            setPermissao('restrito');
                                            setId(item.id);
                                        }}>restrito</button>
                                    <button className='m-1 btn btn-sm btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        onClick={() => {
                                            setPermissao('permitido');
                                            setId(item.id);
                                        }}>permitido</button>
                                    <button className='m-1 btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        onClick={() => {
                                            setPermissao('deletado');
                                            setId(item.id);
                                        }}>deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-column">
                <Card title="Quant. em stock" data="ML" about="saber mais"/>
                <Card title="Clientes" data="" about="saber mais"/>
                <Card title="Pedidos." data="" about="saber mais"/>
            </div>
            <Modal permissao={permissao} id={id}/>
        </div>
    );
}
