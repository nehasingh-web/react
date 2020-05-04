
const intialState = {
    search : ''
}

const reducer = (state = intialState, action) => {
    let newState = {...state}

    if(action.type === 'On_Change'){
        newState= action.payload
    }

    return newState;
}

export default reducer;