import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/Assets/fontawesome-free-6.5.1-web/css/all.css"
import Head from "next/head";
import Navbar from "./pages/Home/components/navbar/Navbar";
import Hero from "./pages/Home/components/hero/Hero";
import Services from "./pages/Home/components/servicess/Services";
import Price from "./pages/Home/components/price/Price";
import About from "./pages/Home/components/about/About";
import Contact from "./pages/Home/components/contact/Contact";
import Footer from "./pages/Home/components/footer/Footer";
import Login from "./pages/Login/loginPage";

const Home = () =>{
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/* <Navbar/>
            <Hero/>
            <Services/>
            <Price/>
            <About/>
            <Contact/>
            <Footer/>  */}
            <Login/>
        </>
    )
}

export default Home;