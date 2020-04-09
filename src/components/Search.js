import React, { Component } from 'react';
import Products from '../assets/products-dataset.json';

class Search extends Component {
    state = {
        search: ""
    }

    renderProduct = product => {
        const { search } = this.state;
        var code = product.title.toLowerCase()

        /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/

        return <div className="col-md-3" style={{ marginTop: '0px' }}>
            <div className='cardStyle'>
                <img src={product.imageUrl}></img>
                <div className='cardProductDetails'>
                    <h4>{product.title} </h4>
                    Price: {product.price}
                </div>
            </div>
        </div>
    }

    onchange = e => {
        this.setState({ search: e.target.value });
    }

    render() {

        const { search } = this.state;
        const filteredProducts = Products.filter(product => {
            return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })

        return (
            <div className="flyout">
                <main style={{ marginTop: '0rem' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <input placeholder="Search Title..." onChange={this.onchange} />
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className='cardHomePage'>
                                {filteredProducts.map((product, index) => {
                                    return this.renderProduct(product)
                                })
                                }
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        );
    }
}
export default Search;


