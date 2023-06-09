import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export default function Main(){
    return (
        <BrowserRouter>
         <App>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="list">
                  <Route index element={<ProductList/>}/>
                  <Route path=":courseSlug" element={<Product/>}/>
                  {/* <Route path="class01" element={<Product/>}/> */}
                </Route>
                <Route path="wishlist" element={<WishList/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
         </App>
        </BrowserRouter>
    )
}