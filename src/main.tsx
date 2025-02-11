import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./AppLayout.tsx";
import Resume from "./components/resume/Resume.tsx";
import Welcome from "./components/welcome/Welcome.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Welcome />}></Route>
          <Route path="resume" element={<Resume />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
