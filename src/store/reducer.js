
const intialState = {
    search : ''
}

const reducer = (state = intialState, action) => {
    console.log(action.payload, 'A')
    let newState = {...state}

    if(action.type === 'On_Change'){
        newState.search = action.payload
    }

    return newState;
}

export default reducer;