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
        question: 'Question 1',
        answer: 'answer 1'
      },
      {
        question: 'Question 2',
        answer: 'answer 2'
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
      <div>
        <h2>FAQs:</h2>
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
