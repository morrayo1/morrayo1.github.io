import React from 'react';


import Header from './Header';
import Content from './Content';
import List from './List';

class App extends React.Component {
    render(){
        
        let title = 'React!!!';
        
        return (
            <div className="react">
                <Header title={title}/>
                <Content title={title}/>
                <List />
            </div>
            )
    }
}

export default App;