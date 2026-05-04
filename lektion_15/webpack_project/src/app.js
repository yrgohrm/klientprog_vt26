import _ from 'lodash'
import './style1.css'

window.addEventListener('load', () => {
    let div = document.getElementById('app')
    div.innerText = _.camelCase("hejsan världen")
})
