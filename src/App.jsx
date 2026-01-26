import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import ServicePage from "./Pages/ServicePage";

function App() {


  return (
    <>
      <Routes>
        <Route path="/servicos/:slug" element={<ServicePage />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
