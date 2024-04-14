import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./index.css"
import VoterId from "./components/VoterId";
import Voteing from "./components/Voteing_page";
import Scanner from "./components/Scanner";
import OTP from "./components/OTP";
function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/v-id' element={<VoterId/>}/>
    <Route path='/v-id/vote' element={<Voteing/>}/>
     <Route path="/qr" element={<Scanner/>}/>
     <Route path="/otp" element={<OTP/>}/>
    </Routes>
  </BrowserRouter>  
</>  
  );
}

export default App;
