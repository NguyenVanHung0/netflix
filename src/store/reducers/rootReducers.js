const initState = {
    language: 'vietnam'
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer
