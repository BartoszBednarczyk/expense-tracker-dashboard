import formatDate from './formatDate'

const filterRecentTransactions = (transaction) => {
    const date = new Date(transaction.date)
    const priorDate = new Date().setDate(new Date().getDate()-30)
    if (date > priorDate){
        return {transaction, date:date}
    }

}

export default filterRecentTransactions