import formatDate from './formatDate'

const filterRecentTransactions = (transaction) => {
    const date = new Date(transaction.date)
    const month = date.getMonth()
    const year = date.getFullYear()
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    
    if (month === currentMonth && year === currentYear){
        return {transaction, date:date}
    }

}

export default filterRecentTransactions