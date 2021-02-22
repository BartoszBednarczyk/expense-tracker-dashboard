import React, { useReducer, createContext } from 'react'
import {auth} from '../firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'
import contextReducer from './contextReducer'



var initialState = JSON.parse(localStorage.getItem('transactions')) || []

// if(auth){
//     console.log(auth.currentUser)
//     initialState = []
// }
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      initialState=[]
    } else {
      // No user is signed in.
    }
  });


export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    
    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    const clearTransactions = () => {
        dispatch({type: 'CLEAR_TRANSACTIONS'})
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount) 
    }, 0)

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            clearTransactions,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}