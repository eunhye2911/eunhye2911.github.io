import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="MainContainer">
                <h1>목록</h1>
                
                <ul>
                    <li><a href="/html">HTML＆CSS</a></li>
                    <li>추가기능 DB연동할 예정</li>
                    
                </ul>
            
            </div>
        
        );
        
    }
    
}

export default Main;