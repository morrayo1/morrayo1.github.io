import React from 'react';

class Header extends React.Component {
    
    sayHello(){
        alert('hello');
    }
    
    render(){
        return <h1 onClick={this.sayHello}>{this.props.title}</h1>
    }
}

export default Header;