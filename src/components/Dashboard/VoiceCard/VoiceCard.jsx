import React from 'react'
import styles from './VoiceCard.module.sass'
import MicIcon from '@material-ui/icons/Mic';

const VoiceCard = () => {
    return (
        <div className={styles.container}>
            <h2>Ask me something</h2>
            <button className={styles.voiceButton}>
                <MicIcon />
            </button>
            <p>Try: add income in category Pets for 50 next tuesday</p>
        </div>
    )
}

export default VoiceCard
