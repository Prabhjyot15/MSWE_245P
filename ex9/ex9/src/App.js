// CSS and other resources
import "./App.css";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingView from "./components/LandingView";
import Footer from "./components/Footer";
import SecondView from "./components/SecondView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        {/* <Routes>
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<SecondView />}></Route>
        </Routes> */}
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<SecondView />}></Route>
          <Route path="exampledataview" element={<SecondView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;