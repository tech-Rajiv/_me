

import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import SingleProjects from './components/SingleProjects';
import AllProjects from './screens/AllProjects';

function App() {
  return (
    <>
      <div className="w-full flex justify-center min-h-screen">
        <div className="max-w-2xl  sm:px-10 md:px-15">
        
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/singleproject" element={<SingleProjects />} />
          <Route path="/allprojects" element={<AllProjects/>} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
