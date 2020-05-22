import React, { Component } from 'react';
import { connect } from 'react-redux'

class Bill extends Component {
    render(){
        return(
            <div className='bill-wrapper'>
                <b>Total:</b><span className='m-L-10'>${this.props.total}</span>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        total: state.total
    }
}
export default connect(mapStateToProps)(Bill)