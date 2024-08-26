import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Frontend/Navbar';
import Dashboard from './Frontend/Dashboard';
import Footer from './Frontend/Footer';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Maindashboard from './Frontend/Maindashboard';
import Admindashboard from './Frontend/Admindashboard';
import AdminDashboard from './Frontend/Admindashboard';
import ManageStudents from './Frontend/ManageStudents';
import ManageSubjects from './Frontend/ManageSubjects';
import ManageMarks from './Frontend/ManageMarks';
import ChangePassword from './Frontend/ChangePassword';
import ResultsSection from './Frontend/ResultsSection';
import StudentLogin from './Frontend/Studentlogin';
import Adminlogin from './Frontend/Adminlogin';
import ReactDOM from 'react-dom/client';

function App() {
  return (<>
   <Navbar></Navbar>
   <div>
       <Router>
         <Routes>
                <Route path='/' element={<Dashboard></Dashboard>}/>
                <Route path="/faculty-login" element={<Adminlogin/>} />
                <Route path="/student-login" element={<StudentLogin />}></Route>
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="manage-subjects" element={<ManageSubjects />} />
                    <Route path="manage-marks" element={<ManageMarks />} />
                    <Route path="results-section" element={<ResultsSection />} />
                    <Route path="change-password" element={<ChangePassword />} />
                </Route>
            </Routes>
        </Router>
   </div>
   <Footer></Footer>


   </>);
}

export default App;
