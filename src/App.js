import { Navigate, Route, Routes } from "react-router-dom";

import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import Home from './pages/Home'
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';
import NavBar from './components/NavBar';
import Nosotros from "./pages/Nosotros";

//import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='cuerpo'>
        <NavBar />
        <Routes>
          {/* <Route path="*" element={<Navigate replace to="/not-found" />} ></Route>
          <Route path="/not-found" element={<NotFound />}></Route> */}
          <Route path="*" component={NotFound} />
          <Route path="/inicio" element={<Home/>}></Route>
          <Route path="/" element={<Navigate replace to="/inicio" />}></Route>
          <Route path="/productos" element={<ItemListContainer />}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/:productName" element={<ItemDetailContainer/>}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}

export default App;