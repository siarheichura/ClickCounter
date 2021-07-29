let value = 0

const counter = document.querySelector('.click-counter__value')
const buttons = document.querySelector('.btn-group')
const click = document.querySelector('#click')

const setCounter = () => counter.innerText = value

setCounter()

buttons.addEventListener('click', event => {
    let { target } = event
    if(target.id === 'up') {
        value += 1
        setCounter()
        click.play()
    } else if(target.id === 'reset') {
        value = 0
        setCounter()
        click.play()
    } else if(target.id === 'down') {
        click.play()
        if(value === 0) return
        value -= 1
        setCounter()
    }
})