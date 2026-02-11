import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1 style={{ backgroundColor: 'teal' }}> 

            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <p>
                This is Brian Tran, Hello World!
            </p>

            List of Stuff:
            <ol>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ol>

             <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
             <p> </p>
            <Container>
                <Row>
                    <Col>
                        <div style={{ backgroundColor: 'red', width:20, height:20 }}>

                        </div>
                    </Col>
                    <Col>
                        <div style={{ backgroundColor: 'red', width:20, height:20 }}>

                        </div>
                        
                        <img src="/images/milesMorales.jpg" alt="Spiderman Meme" />
                    </Col>
                </Row>
            </Container>
            
        </div>

    );
}

export default App;
