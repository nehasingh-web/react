import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/Search'

import Products from '../assets/products-dataset.json';

function Home() {
    // const sizeVar = Products.map((element, i) => {
    //     return element.sizeVariation
    // });
    // for (var i = 0; i < sizeVar.length; i++) {
    //     var object = sizeVar[i];
    //     for (var i = 0; i < object.length; i++) {
    //         var object1 = object[i];
    //         for (var property in object1) {
    //             console.log(object1.id + ',' + object1.title, "dfe");
    //         }
    //     }
    // }
    return (
        <div className='homePage'>
            <div className='tableHomePage'>
                <Search />
            </div>
            {/* <div className='cardHomePage'>
                {Products.map((product, index) => {
                    return <div className='cardStyle'>
                        <img src={product.imageUrl}></img>
                        <div className='cardProductDetails'>
                            <h4>{product.title} </h4>
                            Price: {product.price}
                        </div>
                    </div>
                }
                )}
            </div> */}
        </div>
    )
}

export default Home