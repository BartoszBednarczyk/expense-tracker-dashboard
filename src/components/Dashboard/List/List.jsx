import React, { useContext } from 'react'

import styles from './List.module.sass'
import { ExpenseTrackerContext } from '../../../context/context'
import { Slide } from '@material-ui/core'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/auth'
import firebase from '../../../firebase/firebase'
import sortTransactions from '../../../utils/sortTransactions'
import filterRecentTransactions from '../../../utils/filterRecentTransactions'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)
    const [user]= useAuthState(auth)
    
    const delTransaction = (transaction) => {
        if(user){
            console.log(transaction.id)
            firebase.firestore().collection("users").doc(user.uid).collection('transactions').doc(transaction.id).delete()
            deleteTransaction(transaction.id)
        }
        else {
            deleteTransaction(transaction.id)
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Recent transactions</h2>
            </div>
            <div className={styles.list}>

                {transactions.filter((transaction)=>filterRecentTransactions(transaction)).sort(sortTransactions).map((transaction) => (
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
                            <button className={styles.btn} onClick={() => delTransaction(transaction)}>
                                <DeleteOutlineIcon />
                            </button>
                        </div>
                    </div>
                </Slide>
                ))}
    
            </div>
        </div>
    )
}

export default List
