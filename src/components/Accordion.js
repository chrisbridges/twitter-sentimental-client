import React, { Component } from 'react';
import Section from './Section.js';

export class Accordion extends Component {
  render () {
    return (
      <div className="main">
        {/* <div className="title">{this.props.title}</div> */}
        <h1>FAQs</h1>
        <Section title="Section Title One">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Two">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Three">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
      </div>
    );
  }
}

export default Accordion;