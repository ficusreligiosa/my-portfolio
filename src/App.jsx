import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";       // ✅ default import
import NotFound from "./pages/NotFound"; // also switch to default export for consistency

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
