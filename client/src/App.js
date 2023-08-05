import './App.css';
import Home from './Components/Home/Home';
import Filter from './Components/Filter/Filter';
import Cards from './Components/Home/Home';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
function App() {
   
  return (
    <div className='App'>
         
         <hr />
         <Routes>
            
            <Route path="/J" element={
               <h1>SOY LA APP</h1>
            }/>
            <Route path="/home" element={<Home />} />
            {/* <Route path="filter" element={<Filter />} /> */}
         </Routes>
         
      </div>
  );
}

export default App;
