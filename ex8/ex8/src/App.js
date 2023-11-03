// import ListGroup from "./components/ListGroup";

// function App () {
//   return <ListGroup/>
// }

// export default App

// CSS and other resources
import logo from "./logo.svg";
import "./App.css";
import "./components/Footer.js";

// Components

import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header /> 
      <Footer/>
      <Sidebar/>
    </div>
  );
}

export default App;