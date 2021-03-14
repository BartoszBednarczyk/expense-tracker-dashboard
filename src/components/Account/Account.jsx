import React from 'react'
import styles from './Account.module.sass'
import {auth, providerFacebook, providerGithub, providerGoogle} from '../../firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';

const Account = () => {
    const [user] = useAuthState(auth)
    const signInWithGoogle = () => {
        auth.signInWithPopup(providerGoogle)
    }

    return (
        <div className={styles.container}>
            {user ? <div className={styles.container}><h1>Hello, {user.displayName}</h1>
                <button onClick={() => auth.signOut()} className={styles.btn}>Logout</button>
                </div>
            : 
                <button className={styles.btn} onClick={signInWithGoogle}>
                    <p>Sign in with Google</p>
                </button>
            }
        </div>
    )
}

export default Account
