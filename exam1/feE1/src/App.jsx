import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Add from "./pages/Add";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";
import MainProvider from "./context/MainProvider";

function App() {


  return (
    <>
    <MainProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
