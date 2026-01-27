import React from 'react';
import './style.css';
import Resumo from './Pages/Resumo';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { GlobalStorage } from './Hooks/useContext';
import DateRange from './Components/DateRange';
import Vendas from './Pages/Vendas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Venda from './Pages/Venda';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <div className="containers">
          <Sidenav />
          <main className="flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
