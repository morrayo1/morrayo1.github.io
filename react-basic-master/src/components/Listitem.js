import React from 'react';

class Listitem extends React.Component {
    
    render(){
        
        return(
            <li className={this.props.color}></li>
        )
    }
    
    
}

export default Listitem;