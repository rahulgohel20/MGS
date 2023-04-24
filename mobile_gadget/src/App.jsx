import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from "styled-components";

const App = () => {

  const theme ={
    colors:{
      heading: "rgb(24,24,29)",
      text: "rgb(24,24,29)",
      white: "#fff",
      black: "#212529",
    

    },
  };



  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>\
    </ThemeProvider>
  )
}

export default App