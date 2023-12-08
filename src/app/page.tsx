import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css"
import Head from "next/head";
import Hero from "./pages/components/hero/Hero";
import Navbar from "./pages/components/navbar/Navbar";


const Home = () =>{
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/> 
            <Hero/>
            <h1>home page 90</h1>
        </>
    )
}

export default Home;