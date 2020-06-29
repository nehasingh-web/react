import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './action-type';

export const addToCartAsync = (id) => {
    return{
        type: 'ADD_TO_CART',
        id
    }
}
export const loading = () => {
    return{
        type: 'LOADING'
    }
}
export const addToCart = id => {
    return dispach => {
        setTimeout(()=>{
            dispach(addToCartAsync(id))
        }, 5000)
    }
}
export const removeItem = (id) => {
    return{
        type: 'REMOVE_ITEM',
        id
    }
}
export const subractQuantity = (id) => {
    return{
        type: 'SUB_QUANTITY',
        id
    }
}
export const addQuantity = (id) => {
    return{
        type: 'ADD_QUANTITY',
        id
    }
}