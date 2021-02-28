import React, {useState} from 'react'
import styles from './Dropdown.module.sass'

const Dropdown = () => {
    const [open, setOpen] = useState()
    return (
        <div className={styles.select}>
                        <div className={styles.selectHeader}>
                        <input type="checkbox" />
                        <p>Expense</p>
                        <div onClick={() => setOpen(!open)}>O</div>
                        </div>

                        {open && <div className={styles.dropdown}>
                            <div className={styles.selectElement}>
                                <input type="checkbox" /> <p>Option1</p>
                            </div>
                            <div className={styles.selectElement}>
                                <input type="checkbox" /> <p>Option1</p>
                            </div>
                        </div>}

                    </div>
    )
}

export default Dropdown
