import main from '../../styles/main.module.css'
import Chatu from './Chatu'
export default function MainRoot(){
    return(
        <div className={main.Main}>
            <Chatu />
        </div>
    )
}