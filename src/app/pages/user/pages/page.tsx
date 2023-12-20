import "../../../../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../global.css"
import Navu from "./components/navbar/Navu";
import Sidebar from "./components/sidebar/Sidebar";

const UserHome = () => {
    return(
        <>
            <Navu/>
            <Sidebar/>
            <h1>Home USer</h1>
        </>
    )
}

export default UserHome