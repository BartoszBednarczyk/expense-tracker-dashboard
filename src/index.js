import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import styles from './index.module.sass'
import { Provider } from './context/context'

ReactDOM.render(
        <Provider>
            <App />
        </Provider>
    , document.getElementById("root"))