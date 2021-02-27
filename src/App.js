import React, {useState, useEffect, useContext} from 'react'
import styles from './App.module.sass'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Account from './components/Account/Account'
import History from './components/History/History'
import {auth} from './firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from './firebase/firebase'
import { ExpenseTrackerContext } from './context/context'

const App = () => {
    const [current, setCurrent] = useState(0)
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const { clearTransactions } = useContext(ExpenseTrackerContext)
    let formData = {
        amount: '',
        category: '',
        type: 'Income',
        date: '',
    }

    const createTransaction = () => {
        const transaction = {...formData}
        addTransaction(transaction)
    }

    function renderComp() {
        switch(current){
            case 0:
                return <Dashboard />
            case 1:
                return <History />
            case 3:
                return <Account />
            case 4:
                return <div>Loading</div>
        }
    }

    const [user]= useAuthState(auth)
    useEffect(function(){
        if(user){
            //setCurrent(4)
            clearTransactions()
            const ref = firebase.firestore().collection("users").doc(user.uid).collection('transactions')
            ref.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    formData = {
                        amount: doc.data().amount,
                        category: doc.data().category,
                        type: doc.data().type,
                        date: doc.data().date,
                        id: doc.id
                    }
                    createTransaction()
                });
            })
            .catch((error) => {
                console.log("Error getting transactions: ", error);
            });
        }
        
    },[user])
    return (
        <div className={styles.container}>
            <Navbar user={user} current={current} setCurrent={setCurrent} />
            {renderComp()}
        </div>
    )
}

export default App
