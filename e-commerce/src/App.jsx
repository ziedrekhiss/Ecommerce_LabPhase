import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/login'
import HomePage from './components/HomePage'
import RegisterSucess from './components/auth/RegisterSucess'



function App() {
 
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/ProductDetails/:id' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/regSuccess' element={<RegisterSucess/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
