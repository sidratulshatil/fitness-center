import React from 'react';
import './Faq.css'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='faq'>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How Does React Work?</Accordion.Header>
                    <Accordion.Body>
                        Brought to existence by Jordan Walke and maintained by Facebook, React is the most widely used front-end JavaScript library in the web development domain. Some of the examples of commonly used JavaScript libraries are TensorFlow, Angular, Node etc. React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly. The declarative approach simplifies debugging and makes the code more predictable.

                        Let’s have a look at an Instagram page built entirely with React to better understand how it works.

                        React splits the user interface into several components, as seen in the picture, making the code easier to debug. Each component has its attribute and function.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;