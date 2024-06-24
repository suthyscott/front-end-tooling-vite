import setupCounter from "./counter.js"
import './style.css'

document.querySelector('#app').innerHTML = `
<h1>Counter App</h1>

<p>Click the button to increase the counter.</p>

<div id="counter"></div>

<button id='example'></button>
`

setupCounter(document.querySelector(`#counter`))

setupCounter(document.querySelector('#example'))