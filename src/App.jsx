import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import ServicePage from './Pages/ServicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/servicos/:slug" element={<ServicePage />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
