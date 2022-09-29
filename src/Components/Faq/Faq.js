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
                    <Accordion.Header> Rather than loading data what else are done by useEffect?</Accordion.Header>
                    <Accordion.Body>
                        useEffect is one of the most essential React hooks. Whether you need to fetch data, update the DOM or run any other kind of “side effect”, useEffect allows you to execute code outside of the rendering loop, letting your app run smoothly. <br />
                        Rather than loading data these types of works are done by useEffect <br />
                        <span className='text-danger'>Examples:</span><br />
                        1. Side Effect Runs After Every Render<br />
                        2. Side Effect Runs Only Once After Initial Render<br />
                        3. Side Effect Runs After State Value Changes<br />
                        4. Side Effect Runs After Props Value Change<br />
                        5. Side Effect Runs After Props and State Value Change<br />
                        6. Side EffectCleanup

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;