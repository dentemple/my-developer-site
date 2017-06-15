import React from 'react'
import ReactDOM from 'react-dom'
import App from './page/App'
import registerServiceWorker from './registerServiceWorker'
import './global.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
