import './App.css';
import Form from './components/Form';

function App() {

  // we are calling the LoginForm component in the actual render of the App

  // we are also writing a handleSubmit function that will be the output of our form and
  // that could be the interface to a connected backend service
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted thru the form
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
