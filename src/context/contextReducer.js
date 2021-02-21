const contextReducer = (state, action) => {
    let transactions
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
            console.log(transactions)
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions
        case 'CLEAR_TRANSACTIONS':
            transactions = []
            return transactions
        default:
            return state
    }
}

export default contextReducer