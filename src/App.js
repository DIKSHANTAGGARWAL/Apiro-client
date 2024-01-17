import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Payment from './components/Payment';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path="app" element={<MainContainer/>}>
            <Route path='home' element={<Homepage/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='payment' element={<Payment/>}></Route>
            <Route path='add' element={<AddProduct/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
