import Navu from "../components/navbar/Navu"
import Sidebar from "../components/sidebar/Sidebar"
import '../layout.css'
import Chatu from "./components/Chatu"

const Comunity = () => {
    return(
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    <Chatu/>
                </div>
                
            </div>
            </>
    )
}

export default Comunity