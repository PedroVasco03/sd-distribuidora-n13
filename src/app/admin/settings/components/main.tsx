"use client"
import main from '../../styles/main.module.css'
import Profileu from '../profile/Profileu'

export default function MainRoot(){
    return(
        <div className={main.Main}>
            <Profileu />
        </div>
    )
}