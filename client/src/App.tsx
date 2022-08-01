import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/errors/404";
import Forbidden from "./pages/errors/403";

import "./assets/styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="error">
          <Route path="403" element={<Forbidden />} />
          <Route path="404" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/error/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
