import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./index.css"
import VoterId from "./components/VoterId";
function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/v-id' element={<VoterId/>}/>
    </Routes>
  </BrowserRouter>  
</>  
  );
}

export default App;
