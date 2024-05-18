import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
// import { Theme } from "@radix-ui/themes";
import AppTest from "./components/AppTest";
import TestComponent from "./components/TestComponent";

import { Tooltip, Accordion } from "./components";

// Tạo component App
function App() {
  return (
    <div>
      {/* <Theme> */}
      <h1>Hello world</h1>

      <AppTest />
      <TestComponent />
      <Accordion />
      <Tooltip style={{ marginTop: "10px" }} />

      {/* </Theme> */}
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
