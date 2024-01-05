import './App.css';
import {Route,Routes} from "react-router-dom";
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <MainContainer/>
      {/* <Routes>
        <Route path="/app" element={<MainContainer/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
