import React, { useContext } from 'react'

import styles from './List.module.sass'
import { ExpenseTrackerContext } from '../../../context/context'
import { Slide } from '@material-ui/core'

const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Recent transactions</h2>
            </div>
            <div className={styles.list}>

                {transactions.map((transaction) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <div className={styles.element}>
                        <div className={styles.headers}>
                            <div className={styles.name}><h3>{transaction.category}</h3></div>
                            <div className={styles.category}>
                                <p>{transaction.type==='Income' ? `+${transaction.amount}` : `-${transaction.amount}`}</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.date}><p>{transaction.date}</p></div>
                            <button className={styles.btn} onClick={() => deleteTransaction(transaction.id)}>D</button>
                        </div>
                    </div>
                </Slide>
                ))}
    
            </div>
        </div>
    )
}

export default List
