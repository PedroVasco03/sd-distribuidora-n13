import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css"
import "./pages/assets/fontawesome-free-6.5.1-web/css/all.css"
import Head from "next/head";
import Hero from "./pages/components/hero/Hero";
import Navbar from "./pages/components/navbar/Navbar";
import About from "./pages/components/about/About";
import Price from "./pages/components/price/Price";


const Home = () =>{
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/> 
            <Hero/>
            <Price/>
            <About/>
            <h1>home page 90</h1>
        </>
    )
}

export default Home;