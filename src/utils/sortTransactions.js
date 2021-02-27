const sortTransactions = (a, b) => {
    a = new Date(a.date)
    b = new Date(b.date)
    return a > b ? -1 : a < b ? 1 : 0;
}

export default sortTransactions