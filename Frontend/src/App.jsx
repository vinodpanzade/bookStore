
import React from 'react';
import Home from './Home/Home'; // Correct relative path to Home.js
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses'; // Correct relative path to Courses.js
import Signup from './components/Signup';

const App = () => {
  return (
    <> 
    <div className="dark:bg-slate-800 dark:text-white">
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
     
    </>
  );
}

export default App;
