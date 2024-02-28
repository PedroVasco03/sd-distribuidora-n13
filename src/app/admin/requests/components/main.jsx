import main from '../../styles/main.module.css'
import Container from './container'
import Image from 'next/image'
import image from '../../assets/images/worker.png'
export default function MainRoot(){
    return(
        <div className={main.Main}>
            <div className='container d-flex'>
                <div>
                    <h3 className='p-3'>Pedidos</h3>
                    <p className='p-3 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo assumenda distinctio tenetur deleniti eligendi nostrum, adipisci totam earum provident iusto, non hic a cumque explicabo nemo reiciendis praesentium quaerat?</p>
                </div>
                <div>
                    <Image src={image} width={350} alt='' />
                </div>
            </div>
            <Container />
        </div>
    )
}