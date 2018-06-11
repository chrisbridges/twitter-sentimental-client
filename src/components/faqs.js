import React, { Component } from 'react';
import './faqs.css';

const FAQ = ({onClick, open, item}) =>  <div className="item">
<p className='question' onClick={onClick}>
  {item.question}
</p>
{open && <p className='answer'>
{item.answer}
</p>}
</div>

// for icon when open, icon1, else icon2

// when using && returns the first falsey value or the last truthy value
// {open && <p className='answer'> {item.answer} --- could also use ( open ? <p> : null )


// if component's state is used only locally, then you can use component state, rather than actions/reducers
// stateIsLocal ? componentState : redux


export class FAQs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // start the page with all questions closed
    	selectedQuestion: -1
    };
    // this.openQuestion = this.openQuestion.bind(this);
    // ensures that the 'this' for openQuestion is the same as the constructor's 'this', which is FAQs
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
  // just use arrow funcs
  openQuestion = (index) =>  {
    // when a question is opened, compare what was clicked and if we got a match, change state to show the desired question.
  	this.setState({
    	selectedQuestion: (this.state.selectedQuestion === index ? -1 : index)
    });
    // condition ? a : b
    // // if (condition) {
    //   return a
    // } else {
    //   return b
    // }
  }
  
  render() {
    // get a list of FAQs
    const faqs = this.getFaqs();
    return (
      <div className="FAQs-container">
        <h1>FAQs:</h1>
          {faqs.length && faqs.map((item, index) => (
            <FAQ key={`item-${index}`} item={item} open={this.state.selectedQuestion === index} onClick={() => this.openQuestion(index)} />
          ))}
      </div>
    )
  }
}

export default FAQs;

// state is internal to the component - typically doesn't need to be exposed to other components
// props are for passing info to other components