import React from 'react';
import Listitem from './Listitem';

class List extends React.Component {
    
    
    
    
    render(){
        
        let colorSet = ['red','blue','green'];
        
        let listTag = colorSet.map(function(value){
            return <Listitem color={value}/>
        });
        
        return(
            <ul className="nemo">
                {listTag}         
            </ul>
        )
    }
    
    
}

export default List;