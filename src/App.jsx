import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {SkillsSection} from "./pages/SkillsSection"; // 👈 Corrected import name
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/skills" element={<SkillsSection />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;