import React from 'react'
import styles from './GraphCard.module.sass'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../../hooks/useTransactions'

const GraphCard = ({ title }) => {
    const { total, chartData } = useTransactions(title)
    const options = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
            display: true
        },
        tooltip: {
            enabled: false
        },
        responsive: true,
        maintainAspectRatio: false,
    }
    return (
        <div className={title === "Expense" ? styles.containerExpense : styles.containerIncome}>
            <div className={styles.headerContainer}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <p>This month</p>
                </div>
                <div className={styles.total}>
                    <h2>{total}$</h2>
                </div>
            </div>
            <div className={styles.graph}>
            <div className={styles.graphContainer}>
                {/* <Doughnut options={options} data={chartData} /> */}
            </div>
            </div>
        </div>
    )
}


export default GraphCard
