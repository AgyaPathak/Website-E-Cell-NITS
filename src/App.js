
import {Suspense} from "react";
import Home from "./Components/Home/Home";
import {Router,BrowserRouter} from "react-router-dom";
import Event from "./Components/Event/Event";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar"


function App() {
  return (
    <div >
      <Navbar />
      <Home/>
      <Event />
      <Footer />
    </div>
  );
}

export default App;
