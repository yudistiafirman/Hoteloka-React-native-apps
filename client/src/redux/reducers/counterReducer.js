const data = {
    counter: 1
}


const counterReducer = (state = data, action) => {
    if (action.type === "ADD") {
        return { counter: state.counter + 1 }
    } else if (action.type === "MIN") {
        return { counter: state.counter - 1 }
    } else {
        return state
    }
}



export default counterReducer