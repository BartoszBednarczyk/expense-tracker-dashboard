import React from 'react'
import styles from './App.module.sass'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Dashboard />
        </div>
    )
}

export default App
