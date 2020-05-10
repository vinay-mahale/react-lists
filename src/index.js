import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const arr = [10,60,30,40];

ReactDOM.render(<App numbers={arr} />,document.getElementById("root"));