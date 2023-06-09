import Footer from "./Footer";
import Nav from "./Nav";

export default function App({children}){
    return (
        <>
         <Nav/>
         <div id="main">
            {children}
         </div>
         <Footer/>
        </>
    )
}
