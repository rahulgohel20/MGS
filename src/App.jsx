import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from './pages/Home';
import home from './pages/Register';
import home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<home/>} />
        <Route path='/Register' element={<register/>} />
        <Route path='/Login' element={<login/>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
