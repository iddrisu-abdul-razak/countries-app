import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import DetailScreen from "./screens/DetailScreen";
import Header from "./component/Header";

function App() {
  return(
    <BrowserRouter>
   <div>
   <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen />} /> 
      <Route path="/contact" element={<ContactScreen />} /> 
      <Route path="/about" element={<AboutScreen />} /> 
      <Route path="/detail/:name" element={<DetailScreen />} /> 
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;