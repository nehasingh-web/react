import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../action/action-type';
import items from '../assets/products-dataset.json';

const intialState = {
    search: '',
    items: items,
    addedItems: [],
    total: 0
}

const reducer = (state = intialState, action) => {
    //console.log(action.payload, 'A')
    let newState = { ...state }

    //console.log(newState.items[0].price, 'newState')

    if (action.type === 'On_Change') {
        newState.search = action.payload
    }
    if (action.type === 'ADD_TO_CART') {

        let addedItem = state.items.find(product => product.id === action.id)

        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                total: newState.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = newState.total + addedItem.price

            return {
                ...newState, "addedItems": [...newState.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        //console.log(itemToRemove)
        return {
            ...newState,
            addedItems: new_items,
            total: newTotal
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...newState,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item=> item.id === action.id) 
        //console.log(addedItem, SUB_QUANTITY)
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...newState,
                addedItems: new_items,
                total: newTotal
            }
        }
        else{
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...newState,
                total: newTotal
            }
        }
    }
    if(action.type === 'LOADING'){
        newState.loading = true
    }

    return newState;
}

export default reducer;