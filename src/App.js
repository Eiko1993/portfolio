import "./Assets/CSS/main.css";
import '@fontsource/roboto'; 
import '@fontsource/montserrat'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contacts from "./Pages/Contacts";
import Error from './Pages/Error';

function App() {
  return (
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/*" element={<Error />} /> 
          </Routes>
        <Footer />
      </Router>
  );
}


export default App;
