import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./index.css";

const Accordion = RadixAccordion.Root;

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Item className={classNames("AccordionItem", className)} {...props} ref={forwardedRef}>
    {children}
  </RadixAccordion.Item>
));
AccordionItem.displayName = "ParityAccordionItem";

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Header className="AccordionHeader">
    <RadixAccordion.Trigger className={classNames("AccordionTrigger", className)} {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = "ParityAccordionTrigger";

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Content className={classNames("AccordionContent", className)} {...props} ref={forwardedRef}>
    <div className="AccordionContentText">{children}</div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = "ParityAccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
