import React, { useContext } from 'react'
import styles from './Total.module.sass'

import { ExpenseTrackerContext } from '../../../context/context'

const Total = () => {

    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <div className={styles.container}>
            <h1>{balance}$</h1>
        </div>
    )
}

export default Total
