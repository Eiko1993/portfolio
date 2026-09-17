import "./Assets/CSS/main.css";
import '@fontsource/roboto'; 
import '@fontsource/montserrat'; 
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contacts from "./Pages/Contacts";
import Error from './Pages/Error';

const seoByRoute = {
  "/": {
    title: "Vincent Merah | Développeur Web Front-End",
    description: "Portfolio de Vincent Merah, développeur web front-end spécialisé en React, JavaScript et interfaces modernes."
  },
  "/projects": {
    title: "Mes projets | Vincent Merah",
    description: "Découvrez les projets web réalisés par Vincent Merah, développeur front-end."
  },
  "/contacts": {
    title: "Contact | Vincent Merah",
    description: "Contactez Vincent Merah pour un projet web, un devis ou une mission de développement front-end."
  }
};

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const currentSeo = seoByRoute[location.pathname] || seoByRoute["/"];

    document.title = currentSeo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.description);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentSeo.description);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
