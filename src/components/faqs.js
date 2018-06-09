import React, { Component } from 'react';
import './faqs.css';

export class FAQs extends Component {

  // getFAQs () {
  //   const faqs = [
  //     {
  //       question: 'Question 1',
  //       answer: 'answer 1'
  //     },
  //     {
  //       question: 'Question 2',
  //       answer: 'answer 2'
  //     }
  //   ];
  //   return faqs;
  // }

  // renderFAQs (questions, questionToShow=null) {
  //   return questions.map((question, index) => {
  //     if (index === questionToShow) {
  //       return <li key={`FAQ-${index}`} className="FAQ showAnswer" onClick={(index) => this.toggleHidden(index)}>
  //         <div className="FAQ-question">
  //           {question.question}
  //         </div>
  //         <div className="FAQ-answer">
  //           {question.answer}
  //         </div>
  //       </li>
  //     }
  //     return <li key={`FAQ-${index}`} className="FAQ">
  //       <div className="FAQ-question">
  //         {question.question}
  //       </div>
  //     </li>
  //   });
  // }

  // toggleHidden (index) {
  //   this.renderFAQs(this.getFAQs(), index);
  // }

  // render() {
  //   return (
  //     <div className="FAQs-container">
  //       <h1>FAQs:</h1>
  //       <ul className="FAQs-list">{this.renderFAQs(this.getFAQs())}</ul>
  //     </div>
  //   )
  // }

  constructor(props) {
    super(props)
    this.state = {
      // start the page with all questions closed
    	selectedQuestion: -1
    };
    this.openQuestion = this.openQuestion.bind(this);
  }
	
  getFaqs() {
  	// some service returning a list of FAQs
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
    return faqs;
  }
  
  openQuestion(index) {
    // when a question is opened, compare what was clicked and if we got a match, change state to show the desired question.
  	this.setState({
    	selectedQuestion: (this.state.selectedQuestion === index ? -1 : index)
    });
  }
  
  render() {
    // get a list of FAQs
    const faqs = this.getFaqs();
    return (
      <div className="FAQs-container">
        <h1>FAQs:</h1>
          {faqs.length && faqs.map((item, index) => (
            <div key={`item-${index}`} className={`item ${this.state.selectedQuestion === index ? 'open' : ''}`}>
              <p className='question' onClick={() => this.openQuestion(index)}>
                {item.question}
              </p>
              <p className='answer'>
                {item.answer}
              </p>
            </div>
          ))}
      </div>
    )
  }
}

export default FAQs;
