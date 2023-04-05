import { createRoot } from "react-dom/client";
import WatchNow from "./WatchNow";
import { file } from "./data.js";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/watchnow" element={<WatchNow video={file[0].video} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
