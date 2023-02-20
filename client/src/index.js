import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryContextProvider } from "./context/categoryContext";
import { TaskContextProvider } from "./context/taskContext";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <CategoryContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </CategoryContextProvider>
  </AuthContextProvider>
);
reportWebVitals();
