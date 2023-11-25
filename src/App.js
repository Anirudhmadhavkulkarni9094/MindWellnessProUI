import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './Components/Home/MainScreen';
import Navbar from './Components/Navbar/Navbar';
import AssessmentPage from './Components/Assessments/AssessmentPage';
import Assessment from './Components/Assessments/Assessment';
import MentalHealthResource from './Components/MentalHealthResource';
import ContactUs from './Components/ContactUs';
import Report from './Components/Report';
import QuestionHome from './Components/Questions/QuestionHome';
import Response from './Components/Response/Response';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/Home" element={<MainScreen />} />
            <Route path="/Assessment" element={<AssessmentPage/>} />
            <Route path='/Assessment/Assesment-Chatroom' element={<Assessment/>}></Route>
            <Route path='/Resources' element={<MentalHealthResource/>}></Route>
            <Route path='/Contact Us' element={<ContactUs/>}></Route>
            <Route path = '/Report' element = {<Report></Report>}></Route>
            <Route path = "/Questions" element= {<QuestionHome/>}></Route>
            <Route path = "/Responses" element= {<Response/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
