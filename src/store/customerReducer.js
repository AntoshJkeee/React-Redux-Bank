const initialState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CURRENT_CUSTOMER = 'REMOVE_CURRENT_CUSTOMER'

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CURRENT_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer !== action.payload)}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCurrentCustomerAction = (payload) => ({type: REMOVE_CURRENT_CUSTOMER, payload})