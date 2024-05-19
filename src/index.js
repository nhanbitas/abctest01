import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components";

// Tạo component App
function App() {
  return (
    <div style={{ padding: 20, width: "50vw" }}>
      <h1>Hello world</h1>

      <Accordion
        className="AccordionRoot"
        type="single"
        collapsible
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>Yes. It's unstyled by default, giving you freedom over the look and feel.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            <div>Yes! You can animate the Accordion with CSS or JavaScript.</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// Render component App vào #root element
// ReactDOM.render(<App />, document.getElementById("root"));
const root = createRoot(document.getElementById("root")); // Tạo root mới với createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
