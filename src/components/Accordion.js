import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export class AccordionFAQ extends Component {

  renderFAQs () {
    const faqs = [
      {
        question: 'What is sentimental analysis?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt viverra augue, non lacinia mi fermentum nec. Sed sed tellus vel ligula euismod ultrices. Etiam vitae neque pretium, efficitur neque sed, scelerisque est. Sed convallis diam ut leo interdum sollicitudin. Quisque laoreet interdum ante ut mollis. Fusce vel mauris nec erat gravida pretium. Maecenas porttitor libero tellus, ut tempus quam porta ac. Nulla pretium felis ligula, quis dapibus dolor facilisis in.'
      },
      {
        question: 'How are you conducting this analysis?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt viverra augue, non lacinia mi fermentum nec. Sed sed tellus vel ligula euismod ultrices. Etiam vitae neque pretium, efficitur neque sed, scelerisque est. Sed convallis diam ut leo interdum sollicitudin. Quisque laoreet interdum ante ut mollis. Fusce vel mauris nec erat gravida pretium. Maecenas porttitor libero tellus, ut tempus quam porta ac. Nulla pretium felis ligula, quis dapibus dolor facilisis in.'
      },
      {
        question: 'Should I derive investment decisions from the data that I see here?',
        answer: 'Only if you like losing money.'
      }
    ];

    return faqs.map((item, key) => {
      return <AccordionItem key={key}>
        <AccordionItemTitle>
          {item.question}
        </AccordionItemTitle>
        <AccordionItemBody>
          {item.answer}
        </AccordionItemBody>
      </AccordionItem>
    });
  }

  render () {
    const FAQs = this.renderFAQs();
    return (
      <div className="FAQs">
        <Accordion>
          {FAQs}
        </Accordion>
      </div>
    );
  }
}

export default AccordionFAQ;