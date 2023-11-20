import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/login'
import HomePage from './components/HomePage'
import RegisterSucess from './components/auth/RegisterSucess'
import Navbar from './components/Navbar'
import ShoppingCart from './components/cart/ShoppingCart'


function App() {
 
  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/ProductDetails/:id' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/regSuccess' element={<RegisterSucess/>}/>
          <Route path='/myCart' element={<ShoppingCart/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
