import Header from "../Header";
import Footer from "../Footer";
import NewsLetter from "../Home/NewsLetter";
import { ProductProvider } from "../GlobalContextProvider/ProductContext";
const Layout=({children})=>{

    return(
        <>
      
          <Header/>
          {children}
          <NewsLetter/>
          <Footer/>
          
        </>
    )
}
export default Layout;