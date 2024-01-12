import "../../../../../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../global.css"
import Navu from "../components/navbar/Navu"
import Sidebar from "../components/sidebar/Sidebar"
import '../layout.css'

const Request = () => {
    return(
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis cumque culpa, commodi quibusdam vero. Fugiat, cumque voluptate. Autem necessitatibus voluptas recusandae. Rerum blanditiis voluptatibus perferendis! Accusamus autem ipsam doloremque.
                    Request
                </div>
                
            </div>
        </>
    )
}

export default Request