import React from 'react';
import $ from 'jquery';

class Content extends React.Component {
    
    sayHi(){
        alert('Hi!');
    }
    
    render(){
        
        return <h2>{this.props.title} Basic Example</h2>
    }
}

export default Content;

var aa = new Content();

$(document).ready(function(){
    
    $(document).on('click','h2',function(){
        aa.sayHi();
    });
    
});