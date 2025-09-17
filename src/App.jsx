import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills"; // 👈 New: Import the Skills component
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* 👇 New: Add a route for the Skills page */}
          <Route path="/skills" element={<Skills />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;