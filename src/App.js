//import { Routes , Route } from 'react-router-dom';
import "./styles/bootstrap.min.css";
import "./styles/null.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import {Route, Link, Routes} from 'react-router-dom';


function App() {
  
  return (
      <>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </>

  );
  
}

export default App;


