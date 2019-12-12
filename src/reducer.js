export function reducer(state = [], action) {
    switch (action.type) {
        case 'ADDOUTPUT':
            return [...state, action.payload];
        case 'EQUEL':
            return action.payload
        case 'REMOVE':
            return action.payload
        default:
            return state
    }
}