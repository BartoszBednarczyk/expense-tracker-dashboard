import React from 'react'
import styles from './Dashboard.module.sass'

import Total from './Total/Total'
import GraphCard from './GraphCard/GraphCard'
import FormCard from './FormCard/FormCard'
import List from './List/List'
import VoiceCard from './VoiceCard/VoiceCard'

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.greet}>
                    <h1>Good morning!</h1>
                </div>
                <Total />
                <FormCard />
                <VoiceCard />
                <GraphCard title="Income" />
                <GraphCard title="Expense" />
                <List />

            </div>
        </div>
    )
}

export default Dashboard
