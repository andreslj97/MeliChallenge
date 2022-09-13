import React,{ useEffect,useState } from "react";
import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Home, NotFound, Product, TopNav, Search } from './components'
import { ApiProvider } from './components/ApiProvider/ApiProvider'

function App() {
  
  const [queryParams, setQueryParams] = useState('')
  const [idProduct, setIdProduct] = useState('')

  useEffect(() => {
    document.title = 'Mercado Libre Colombia';
  });

  return (
      <BrowserRouter>
      <ApiProvider>
        <TopNav setQueryParams={setQueryParams}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items" element={<Search queryParams={queryParams} setIdProduct={setIdProduct}/>}/>
          <Route path="/api/items/:id" element={<Product/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </ApiProvider>
      </BrowserRouter>
  );
}

export default App;