import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './Components/Home/MainScreen';
import NavBar2 from './Components/Navbar/NavBar2';
import AssessmentPage from './Components/Assessments/AssessmentPage';
import Assessment from './Components/Assessments/Assessment';
import MentalHealthResource from './Components/MentalHealthResource';
import ContactUs from './Components/ContactUs';

import FORUM_HOME_PAGE from './Components/Forum/FORUM_HOME_PAGE';
import FORUM_CONTENT from './Components/Forum/FORUM_CONTENT';
import Report from './Components/Report/Report';
import Suggestions from './Components/Suggestions/Suggestions';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar2 /> 
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/Home" element={<MainScreen />} />
            <Route path="/Assessment" element={<AssessmentPage/>} />
            <Route path='/Assessment/Assesment-Chatroom' element={<Assessment/>}></Route>
            <Route path='/Resources' element={<MentalHealthResource/>}></Route>
            <Route path='/Contact Us' element={<ContactUs/>}></Route>
            <Route path = '/Report' element = {<Report></Report>}></Route>
            
            <Route path = "/forum" element= {<FORUM_HOME_PAGE/>}></Route>
            <Route path = "/forum/channel" element= {<FORUM_CONTENT/>}></Route>
            <Route path = "/Suggestions" element= {<Suggestions/>}></Route>
          
          
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
