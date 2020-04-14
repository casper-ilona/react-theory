import React, { Component } from 'react';
import './App.scss';
import About from './About/About';
import Cars from './Cars/Cars';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        
                        <li>
                            <a href="/cars">Cars</a>
                        </li>
                    </ul>
                </nav>
                
                <hr/>
                
                
                {/*lokalhost:3000,*/}
                < Route path="/" exact render={() => <h1>Home Page</h1>}/>
                <Route path="/about" component={About}/>
                <Route path="/cars" component={Cars}/>
                
                {/*<About />*/}
                
                {/*<Cars />*/}
            </div>
        );
    }
}

export default App;
