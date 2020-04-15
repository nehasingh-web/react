import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../../components/Search';
import './Home.css'
//import Products from '../../assets/products-dataset.json';

function Home() {
    // const sizeVar = Products.map((element, i) => {
    //     return element.sizeVariation
    // }).forEach(el => {
    //     el.forEach(el1 => {
    //        // console.log(el1.title, "sizevariation")
    //     })
    // });

    // const sizeVar = [];
    // Products.map((element, i) => {
    //     return element.sizeVariation
    // }).forEach(el => {
    //     el.forEach(el1 => {
    //         sizeVar.push(el1.title)
    //     })
    // });
   // console.log(sizeVar, "sizevariation")

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