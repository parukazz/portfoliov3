import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./_root/PageLayout";
import Home from "./_root/pages/Home";
import Works from "./_root/pages/Works";
import Services from "./_root/pages/Services";
import About from "./_root/pages/About";
import Contact from "./_root/pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
