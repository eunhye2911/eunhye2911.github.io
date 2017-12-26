import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Example from './Example';
import './HtmlPage.css';

class HtmlPage extends React.Component {
    render() {
        return (
            <div className="HTMLContainer">        
                <div className="menu">
                <ul>
                    <li><h2><a href="/html">
                                HTML Page

                            </a>

                        </h2>

                    </li>

                    <li><a href="/html/example">
                            Example

                        </a>

                    </li>

                </ul>
                </div>
                
                <div className="container">
                    <Route path="/html/example" component={Example}></Route>
                    
                </div>
            
            </div>
        
        );
        
    }
    
}

export default HtmlPage;