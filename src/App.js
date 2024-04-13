import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./index.css"
import VoterId from "./components/VoterId";
import Voteing from "./components/Voteing_page";
function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/v-id' element={<VoterId/>}/>
    <Route path='/v-id/vote' element={<Voteing/>}/>
    
    </Routes>
  </BrowserRouter>  
</>  
  );
}

export default App;
