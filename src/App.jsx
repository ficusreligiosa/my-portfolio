import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";       // ✅ default import
import NotFound from "./pages/NotFound"; // also switch to default export for consistency

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
