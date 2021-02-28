import { Checkbox } from '@material-ui/core'
import React, {useState} from 'react'
import styles from './History.module.sass'
import Dropdown from './Dropdown/Dropdown'

const History = () => {
    

    return (
        <div className={styles.container}>
            <div className={styles.headers}>
                <div className={styles.title}><h1>History</h1></div>
                <div className={styles.options}>
                    <Dropdown />
                </div>
            </div>
            <div className={styles.history}>
                <div>El1</div>
                <div>El2</div>
            </div>
        </div>
    )
}

export default History
