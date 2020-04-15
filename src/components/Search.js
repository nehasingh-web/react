import React, { Component } from 'react';
import Products from '../assets/products-dataset.json';

class Search extends Component {
    state = {
        search: ""
    }

    renderProduct = product => {
       // const { search } = this.state;
       // var code = product.title.toLowerCase()

        /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/

        return <div className='cardStyle'>
                <img alt='product' src={product.imageUrl}></img>
                <div className='cardProductDetails'>
                    <h4>{product.title} </h4>
                    Price: {product.price}
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
                <main>
                    <div className="container">
                        <div className="flex flex-center">
                            <input placeholder="Search Title..." onChange={this.onchange} />
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
        );
    }
}
export default Search;


