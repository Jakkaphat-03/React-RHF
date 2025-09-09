import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ถ้ามีใช้ Tailwind หรือ CSS ปกติ

// สั่ง render App ลงใน div id="root" (อยู่ใน index.html)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
