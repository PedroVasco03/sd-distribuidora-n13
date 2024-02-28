import main from '../../styles/main.module.css';
import ContainerPrincipal from './containerprincipal';
import Image from 'next/image';
import image from '../../assets/images/dashboard.png';
import getAll from '@/app/services/getAll';
import { useState, useEffect } from 'react';
import deleteId from '../../../services/delete.js';

export default function MainRoot() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); // Executar apenas uma vez ao montar o componente

    const fetchData = async () => {
        try {
            const res = await getAll('feedback');
            setData(res.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const deleteData = async (id) => {
        try {
            await deleteId('feedback', id);
            alert('Feedback eliminado com sucesso!');
            // Atualizar os dados após excluir
            fetchData();
        } catch (error) {
            console.error('Erro ao excluir feedback:', error);
        }
    };

    return (
        <div className={main.Main}>
            <div className='d-flex container'>
                <div>
                    <h3 className='p-3'>DashBoard</h3>
                    <p className='p-3 text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod in quae minus eius unde consequatur placeat, veritatis illo quasi, officiis dignissimos eos cum autem architecto sapiente commodi rerum quam nesciunt.</p>
                </div>
                <div>
                    <Image src={image} width={450} alt='dashboard' />
                </div>
            </div>
            <ContainerPrincipal />
            <div>
                <h2 className='m-4'>Feedback</h2>
                {data.map((item) => (
                    <div className='p-3' key={item.id}>
                        <div className='shadow bg-body rounded p-3'>
                            <h3 className='m-2'>{item.nome}</h3>
                            <p className='text-muted m-2 mx-4'>{item.email}</p>
                            <p className='m-2 mx-4'>{item.mensagem}</p>
                            <button onClick={() => deleteData(item.id)} style={{ float: 'right', clear: 'both' }} className='btn btn-sm btn-danger'>eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
