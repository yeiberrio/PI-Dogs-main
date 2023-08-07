import './App.css';
import Home from './Components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import LandinPage from './Components/Landing/Landing';
import Detail from './Components/Detail/Detail';
function App() {
   
  return (
    <div className='App'>
         
         <hr />
         <Routes>
            
            <Route path="/" element={ <LandinPage />  }/>
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={ <Detail />  }/>
            {/* <Route path="filter" element={<Filter />} /> */}
         </Routes>
         
      </div>
  );
}

export default App;
