// App.js

// IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';

// App function
  // path='edit/:id': The :id portion is a URL parameter that represents the unique ID of the movie the user wants to edit.
  // element={<Edit />}: This specifies that the Edit component should be rendered when the route /edit/:id is visited.
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;