import {Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Header from './components/header/Header';
import GenPage from './pages/genpage/GenPage';
import OrdersPage from './pages/orders/OrdersPage';

function App() {
  return (
    <div className="app">
        <>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/bot' element={<GenPage/>}/>
            <Route path='/orders' element={<OrdersPage/>}/>
          </Routes>
        </>

    </div>
  );
}

export default App;
