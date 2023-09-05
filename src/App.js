
import './App.css';
import MuiNavBar from './component/MuiNavBar';
import API from './API'
import Home from './component/Home';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <MuiNavBar/>
       <API/>
       {/* <Home/> */}
      </header>
    </div>
  );
}

export default App;
