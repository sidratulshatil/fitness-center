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
                    <Accordion.Header>What are the difference between props and state?</Accordion.Header>
                    <Accordion.Body>
                        React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.

                        How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components.

                        The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

                        A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.

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