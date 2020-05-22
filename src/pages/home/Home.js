import React, { Component } from 'react';
import Products from '../../assets/products-dataset.json';
import { connect } from 'react-redux';
import './Home.css';
import { addToCart } from '../../action/action';
import logo from '../../assets/nykaa_logo.svg';

class Home extends Component {
    addToCart = (id) => {
        this.props.addToCart(id);
    }
    onImgError = (that) => {
        that.target.src = logo;
    }
    renderProduct = product => {
        return (
            <div className='cardStyle' key={product.id}>
                <img src={product.imageUrl} onError={(that) => { this.onImgError(that) }} />
                <div className='cardProductDetails'>
                    <h5>{product.title} </h5>
                    <b>Price:</b> ${product.price}
                </div>
                <div to="/" className="btn btn-info float-right" onClick={() => { this.addToCart(product.id) }} >Add To Cart</div>
            </div>
        )
    }
    render() {
        const { search } = this.props;
        const filteredProducts = Products.filter(product => {
            return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        return (
            <div className="container">
                <div className="flex flex-center">
                    <input placeholder="Search Title..." onChange={this.props.onchange} />
                </div>
                <div className='row'>
                    <div className='cardHomePage'>
                        {filteredProducts.map((product, index) => {
                            return this.renderProduct(product)
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    search: state.search,
    items: state.Products
})
const mapDispachToProps = (dispach) => ({
    onchange: (e) => dispach({
        type: 'On_Change',
        payload: e.target.value,
    }),
    addToCart: (id) => {
        dispach(addToCart(id))
    }
})

export default connect(mapStateToProps, mapDispachToProps)(Home);


// for (var i=0 ; i<5; i++){ 
//     setTimeout(function timer(){
//         console.log(i);
//     },i*1000);
// } 

// let x = 'o'; 
// (function() {console.log(x); let x='i'; }());


// var obj ={
//     val: 0,
//     inc() {
//         this.val++;
//         console.log(this.val)
//     }
// }

// var inc = obj.inc;
// inc();
// inc.call(obj);
// obj.inc();
// var obj2 ={ val:2}; 
// var inc2 = inc.bind(obj2)
// inc2()




// function A(){

// };
// function B(val){
//     this.valB = val;
// };
// this.prototype = Object.create(A.prototype);
// var b = new B(2);
// console.log(b.valB);
// console.log(b.val);
// A.prototype.val = 1;
// console.log(b.val)

// function A(id){
//     console.log(`a in A$({id})`)
// }
// class B extends A{
//     constructor(id){
//         super(id);
//         console.log(`b in B$({id})`)
//     }
// }
// var b = new B(2)


// const a ={
//     one: '1.0',
//     two: '2.0',
//     three: '3.0'
// }
// const {one, ...rem} = a;
// const all = {...a};
// console.log(one==='1.0', rem===undefined, rem.three=='3.0', all.one===a.one)

// const a = [1,2,3];
// const [one, ...rem] = a;
// const [first,,,fourth] = a;
// console.log(one===1, rem.every((i,j)=> i == j+2,), first ===1, fourth===2)


// var count = 0;

// function countFunction()
// {
//     count++;
//     console.log(  count + " times" );
// }
// const flatten = [1, 2, [3, 4, [5, 6]]];
// flatten.flat(2);