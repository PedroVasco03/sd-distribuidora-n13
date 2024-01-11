import "../../../../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../global.css"
import Navu from "./components/navbar/Navu";
import Sidebar from "./components/sidebar/Sidebar";
import Herou from "./components/hero/Herou";
import Offeru from "./components/offer/Offeru";
import "./layout.css"

const UserHome = () => {
    return(
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    <Herou/>
                    <Offeru/> 
                </div>
                
            </div>
            
        </>
    )
}

export default UserHome