import Navbar from '../components/Navbar';
import Head from 'next/head';
const Layout=({children})=>{
    return(
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        </Head>
        <Navbar/>
        {children}

        <script type="text/javascript" src="js/materialize.min.js"></script>
        </>
    )
}
export default Layout;