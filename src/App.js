import './App.css';
import {Routes, Route,HashRouter} from 'react-router-dom';
import Login from './components/Login';
import Employee from './components/Employee';



function App() {
  return (
    <HashRouter >
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/loginSuccess/:Id" element={<Employee/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
