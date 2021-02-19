import React from 'react'
import styles from './Navbar.module.sass'
import cx from 'classnames'

const Navbar = () => {
    return (
        <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>ExTra</h1>
                </div>
                <div className={styles.options}>
                    <div className={styles.btnActive}>
                        <button>1</button>
                        <p>Dashboard</p>
                    </div>
                    <div>
                        <button>2</button>
                        <p>History</p>
                    </div>
                    <div>
                        <button>3</button>
                        <p>Diagrams</p>
                    </div>
                </div>
                <div className={styles.login}>
                    <button>
                        L
                    </button>
                    <p>Login</p>
                </div>
        </div>
    )
}

export default Navbar
