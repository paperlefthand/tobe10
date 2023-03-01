import React from "react";
import { createRoot } from "react-dom/client";
import { InputArea } from "./InputArea";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    {/* <Header /> */}
    <React.StrictMode>
      <InputArea />
    </React.StrictMode>
    {/* <Footer /> */}
  </div>
);
