import './App.css';
import Home from './pages/home';
import Fibonacci from './pages/fibonacci/fibonacci'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
          </Route>
          <Route path="/fib" element={<Fibonacci/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
