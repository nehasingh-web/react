import React, { Component } from 'react';

class Detail extends Component {
    state = {
        loading: true,
        user: []
    }
    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ user: data, loading: false })
    }
    renderList = list => {
        return <ul className='list-detail' key={list.id}>
            <li className='p-10-25'><b>Title: </b>{list.title} </li>
        </ul>
    }
    render() {
        return (this.state.loading || !this.state.user ?
            (<div> Loading...</div>) :
            <div className="col">
                <div className='flex-center'>
                <h5>Some Titles </h5>
                    {this.state.user.map(list => {
                        return this.renderList(list)
                    })}
                </div>
            </div>
        )
    }
}
export default Detail;