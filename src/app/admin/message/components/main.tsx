import main from '../../styles/main.module.css'
import ChatU from './Chatu'
export default function MainRoot(){
    return(
        <div className={main.Main}>
            <ChatU /> 
        </div>
    )
}