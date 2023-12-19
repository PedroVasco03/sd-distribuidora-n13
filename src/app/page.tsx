import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/fontawesome-free-6.5.1-web/css/all.css"
import "./global.css"
import Head from "next/head";
import Navbar from "./Home/components/navbar/Navbar";
import Services from "./Home/components/servicess/Services";
import Price from "./Home/components/price/Price";
import About from "./Home/components/about/About";
import Contact from "./Home/components/contact/Contact";
import Footer from "./Home/components/footer/Footer";
import Hero from "./Home/components/hero/Hero";

const Home = () =>{
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <Hero/>
            <Services/>
            <Price/>
            <About/>
            <Contact/>
            <Footer/> 
        </>
    )
}

export default Home;