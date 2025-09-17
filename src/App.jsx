import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AboutSection } from "./Components/AboutSection"; // Import AboutSection
import { SkillsSection } from "./Components/SkillsSection";
import { ProjectsSection } from "./Components/ProjectsSection"; // Import ProjectsSection
import { ContactSection } from "./Components/ContactSection";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutSection />} /> // Add route for About
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} /> // Add route for Projects
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;