const initState = {
    language: 'vietnam',
    email: '',
    password: '',
    package: ''
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'SET_PASS':
            return {
                ...state,
                password: action.payload
            }
        case 'SET_PACKAGE':
            return {
                ...state,
                package: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer
