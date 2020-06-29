import React, { Component } from 'react';
import { connect } from 'react-redux'

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name || 'MYComp' 
        }
        

        
    }
    handleClick1(){
        alert(this.name);
    }
    handleClick3 = () => {
        alert(this.name);
    }
    render(){
        return(
            <div className='bill-wrapper'>
              
              {this.state.name}
            </div>
        )
    }
}

export default Test