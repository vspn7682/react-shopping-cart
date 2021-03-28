export const initialState = {
    basket: [],
    user: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_CART':
            const newCart = [...state.basket]
            const index = newCart.findIndex((item) => item.id === action.id)

            index >= 0 ? newCart.splice(index, 1) : console.warn('Item does not exist')

            return {
                ...state,
                basket: newCart
            }

        case 'RESET_CART':
            return {
                ...state,
                basket: []
            }
        default:
            return state
    }
}