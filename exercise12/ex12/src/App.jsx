import '../public/App.css';
import Header from './components/Header';
import { BrowserRouter , Routes,  Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FullTimeView from './components/FullTimeView';
import PartTimeView from './components/PartTimeView';
import OnlineBook from './components/OnlineBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Sidebar/>
    <Routes>
      <Route path="/" element={<FullTimeView />}/>
      <Route path="/researchview" element={<PartTimeView />}/>
      <Route path="/onlineBooks" element={<OnlineBook />}>
      </Route>
    </Routes>
  </BrowserRouter>
      {/* <BrowserRouter>
        <Header />
        <Sidebar/>
        <Routes>
          <Route index element={<FullTimeView />}></Route>
          <Route path="researchview" element={<PartTimeView />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
