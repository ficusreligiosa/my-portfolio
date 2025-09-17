import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {SkillsSection} from "./Components/SkillsSection";
import {ContactSection} from "./Components/ContactSection";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="" element={<SkillsSection />} /> 
          <Route path="" element={<ContactSection />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;