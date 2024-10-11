//Name: Tomás Pettit
//Student ID: G00419414

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Read from './components/read';
import Create from './components/create';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read />} /> 
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
