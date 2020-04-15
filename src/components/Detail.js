import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Detail extends Component {
    state = {
        loading:true,
        human:null
    }
    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ human: data.results[0], loading:false})
    }
    render(){
        return( this.state.loading || !this.state.human ? 
            ( <div> Loading...</div>): 
            <div>
                <div>{ this.state.human.name.title}</div>
            </div>
        )
    }

}
export default Detail;