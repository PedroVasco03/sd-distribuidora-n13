import "../../../../../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../global.css"
import '../layout.css'
import Navu from "../components/navbar/Navu"
import Sidebar from "../components/sidebar/Sidebar"

const Profile = () => {
    return(
        <>
            <Navu/>
            <div className="Cgeral">
                <div className="Cside">
                   <Sidebar/> 
                </div>
                
                <div className="Cconteudo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis cumque culpa, commodi quibusdam vero. Fugiat, cumque voluptate. Autem necessitatibus voluptas recusandae. Rerum blanditiis voluptatibus perferendis! Accusamus autem ipsam doloremque.
                    SEts
                </div>
                
            </div>
        </>
    )
}

export default Profile