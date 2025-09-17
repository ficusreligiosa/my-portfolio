import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/SkillsSection"; // 👈 Corrected import name
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;