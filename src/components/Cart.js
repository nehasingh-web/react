import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeItem, addQuantity, subractQuantity } from '../action/action';
import Bill from './Bill';
import logo from '../assets//nykaa_logo.svg'

class Cart extends Component {
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    handleSubractQuantity = (id) => {
        this.props.subractQuantity(id);
    }
    onImgError = (that) => {
        that.target.src = logo;
    }
    renderAddedItem = () => {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item flex" key={item.id}>
                            <div className="item-img m-R-30">
                                <img alt='product' src={item.imageUrl} onError={(that) => { this.onImgError(that) }}></img>
                            </div>
                            <div className="item-desc">
                                <div className="title"><b>{item.title}</b></div>
                                <p className="title">{item.subTitle}</p>
                                <p><b>Price: ${item.price}</b></p>
                                <p>
                                <Link to='/cart' className='m-R-10 color-black circle text-decoration-none' onClick={() => { this.handleSubractQuantity(item.id) }}>-</Link>
                                    <span className='rectangle m-R-10'>{item.quantity}</span>
                                    <Link to='/cart' className='color-black circle text-decoration-none' onClick={() => { this.handleAddQuantity(item.id) }}>+</Link>
                                </p>
                            </div>
                            <div className="cursor-pointer ml-auto">
                                <span className="remove " onClick={() => { this.handleRemove(item.id) }}>X</span>
                            </div>
                        </li>
                    )
                })
            ) :

            (
                <p className='text-center'>Your Cart is empty</p>
            )
        return addedItems;
    }
    render() {

        return (
            <div className="container">
                <div className="cart">
                    <h5 className='page-heading'>My Cart</h5>
                    <ul className="collection">
                        {this.renderAddedItem()}
                    </ul>
                </div>
                <Bill />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subractQuantity: (id) => { dispatch(subractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)