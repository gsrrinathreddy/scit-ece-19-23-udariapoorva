
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Skills from './Pages/Skills';
import Qualification from './Pages/Qualification';
import Experiance from './Pages/Experiance';
import Hobbies from './Pages/Hobbies';

import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route Path="AboutUs" element={<AboutUs/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Qualification" element={<Qualification/>}/>
        <Route path="Experiance" element={<Experiance/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
