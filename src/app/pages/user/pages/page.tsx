import "../../../../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../global.css"
import Sidebar from "./home/components/sidebar/Sidebar"
import Navu from "./home/components/navbar/Navu";

const UserHome = () => {
    return(
        <>
            <Navu/>
            {/* <Sidebar/> */}
            <h1>Home USer</h1>
        </>
    )
}

export default UserHome