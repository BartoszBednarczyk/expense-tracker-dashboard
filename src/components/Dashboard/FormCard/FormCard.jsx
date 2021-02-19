import React, { useState, useEffect, useContext } from 'react'

import { ExpenseTrackerContext } from '../../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories } from '../../../constants/categories'
import formatDate from '../../../utils/formatDate'
//import { useSpeechContext } from '@speechly/react-client'

import styles from './FormCard.module.sass'

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const FormCard = () => {

    const [formData, setFormData] = useState(initialState)
    const { addTransaction } = useContext(ExpenseTrackerContext)
    //const { segment } = useSpeechContext()

    useEffect(() => {
        formData.type === 'Income' ? formData.category = incomeCategories[0].type : formData.category = expenseCategories[0].type
    }, [formData.type])

    const createTransaction = () => {
        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction)
        setFormData(initialState)
    }

    // useEffect(() => {
    //     if(segment) {
    //         if(segment.intent.intent === 'add_expense') {
    //             setFormData({... formData, type: 'Expense'})
    //         } else if(segment.intent.intent === 'add_income'){
    //             setFormData({... formData, type: 'Income'})
    //         } else if(segment.isFinal && segment.intent.intent === "create_transaction") {
    //             return createTransaction()
    //         } else if(segment.isFinal && segment.intent.intent === "cancel_transaction") {
    //             return setFormData(initialState)
    //         }

    //         segment.entities.forEach((e) => {
    //             const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}}`
    //             switch (e.type) {
    //                 case 'amount':
    //                     setFormData({... formData, amount: e.value})
    //                     break
    //                 case 'category':
    //                     if(incomeCategories.map((iC) => iC.type).includes(category)){
    //                         setFormData({...formData, type: 'Income', category})
    //                     } else if(incomeCategories.map((iC) => iC.type).includes(category)){
    //                         setFormData({...formData, type: 'Expense', category})
    //                     }
    //                     break
    //                 case 'date':
    //                     setFormData({...formData, date: e.value})
    //                     break
    //                 default:
    //                     break
    //             }
    //         })

    //         if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date){
    //             createTransaction()
    //         }
    //     }
    // }, [segment])

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

    return (
        <div className={styles.container}>
            <div className={styles.form}>
            <div className={styles.formHeader}><h2>Add transaction</h2></div>
            
            <form className={styles.formSelect} onSubmit={(e) => {e.preventDefault()}}>
                <select className={styles.selectOption} value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <select className={styles.selectOption} value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    {selectedCategories.map((c) => <option key={c.type} value={c.type}>{c.type}</option>)}
                </select>
                <input className={styles.selectOption} placeholder="50$" type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
                <input className={styles.selectOption} type="date" label="Date" value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})} />
                <button className={styles.submitButton}  onClick={createTransaction}>Add</button>
            </form>
            </div>
            
        </div>
    )
}



export default FormCard
