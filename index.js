let value = 0

// Local storage API
const setLocalStorage = () => {
    localStorage.setItem('count value', JSON.stringify(value))
}
const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('count value'))
}

// DOM-elements
const counter = document.querySelector('.click-counter__value')
const buttons = document.querySelector('.btn-group')
const modal = document.querySelector('.modal')

const setModalText = () => modal.innerText = getLocalStorage() === null ? 'Go-go-go!' : `Your last result: ${getLocalStorage()}`
const setCounter = () => counter.innerText = value

setTimeout(() => {
    modal.classList.add('d-none')
}, 2000);

setModalText()
setCounter()

buttons.addEventListener('click', event => {
    let { target } = event
    if(target.id === 'up') {
        value += 1
        setCounter()
    } else if(target.id === 'reset') {
        value = 0
        setCounter()
    } else if(target.id === 'down') {
        if(value === 0) return
        value -= 1
        setCounter()
    }
    setLocalStorage()
})