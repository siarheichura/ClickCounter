let value = 0

const counter = document.querySelector('.click-counter__value')
const buttons = document.querySelector('.btn-group')

const setCounter = () => counter.innerText = value

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
})