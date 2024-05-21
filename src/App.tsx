import { FC } from 'react';
import reactlogo from './assets/images/react.svg';
import './assets/styles/app.css';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Badge } from './components';

const App: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={reactlogo} alt='react' width={100} height={100} />

      <h2>Demo for Accordion</h2>

      <Accordion
        style={{ width: '500px', margin: '50px' }}
        type='single'
        defaultValue='item-1'
        className='Accordion'
        onValueChange={(value) => console.log(value)}
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>Yes. Its unstyled by default, giving you freedom over the look and feel.</AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            <div>Yes! You can animate the Accordion with CSS or JavaScript.</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2>Demo for Badge</h2>

      <Badge color='red'>Base</Badge>
    </div>
  );
};

export default App;
