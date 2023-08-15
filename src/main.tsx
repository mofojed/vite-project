import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function checkZipSupport() {
  console.log(
    "MJB support.js Buff",
    typeof Buffer !== "undefined",
    typeof Buffer
  );
  try {
    // console.log('MJB Process is', process);
    // const readableStream = await import("readable-stream");
    // console.log("MJB readable-stream is", readableStream);
    // console.log('MJB Readable is', readableStream.default.Readable);
    // console.log("MJB Readable is", readableStream.Readable);
  } catch (e) {
    console.log("MJB support.js error", e);
  }
}

checkZipSupport();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
