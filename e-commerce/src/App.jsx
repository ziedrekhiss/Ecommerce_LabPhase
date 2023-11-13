import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/login'



function App() {
 
  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
