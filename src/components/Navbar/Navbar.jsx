import React from 'react'
import styles from './Navbar.module.sass'
import cx from 'classnames'

const Navbar = ({current, setCurrent, user}) => {
    return (
        <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>ExTra</h1>
                </div>
                <div className={styles.options}>
                    <div className={current === 0 ? styles.btnActive : null}>
                        <button onClick={() => setCurrent(0)}>1</button>
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
                <div className={current === 3 ? styles.btnActive : null}>
                    <button style={user ? {backgroundImage: `url(${user.photoURL})`}: {color: "blue"}} onClick={() => setCurrent(3)}>
                        {user? null : "A"}
                    </button>
                    <p>Account</p>
                </div>
        </div>
    )
}

export default Navbar
