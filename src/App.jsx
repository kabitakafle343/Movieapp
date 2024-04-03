
import './App.css'
import Header from './Components/Header'
import SingleMovie from './Components/SingleMovie'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { AppProvider } from './Context/Context'
import Singlepage from './Components/Singlepage'

function App() {

console.log('hello')
  return (
    <>
    
       <BrowserRouter>
     
      <Routes>
     
      
        <Route path="/" element={<SingleMovie/>}></Route>
        <Route path="movie/:id" element={<Singlepage/>}></Route>
     
        </Routes>
    </BrowserRouter>


 
    </>
  )
}

export default App
