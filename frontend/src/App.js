import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './routes/Main';
import HtmlPage from './routes/HtmlPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/html" component={HtmlPage}></Route>
                        

                    </Switch>
                    
                </div>
                
            </Router>
        
        );
        
    }
    
}

export default App;