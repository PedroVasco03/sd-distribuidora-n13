'use client'

import "../../../../../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../global.css"
import '../layout.css'
import Navu from "../components/navbar/Navu"
import Sidebar from "../components/sidebar/Sidebar"
import Profileu from "./components/profile/Profileu";
import { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        typeof document !== undefined
          ? require("bootstrap/dist/js/bootstrap")
          : null;
        },[]);
    return(
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    <Profileu/>
                </div>
                
            </div>
        </>
    )
}

export default Profile