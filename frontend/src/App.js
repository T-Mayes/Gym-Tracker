import {BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import SplitDay1 from './pages/splitDay1'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <div className = "pages">
          <Routes>
            <Route
              path="/"
              element={<SplitDay1 />}
            />
          </Routes>
         </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
