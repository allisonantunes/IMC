import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notNumber, imc } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        AlertError.open()
        return
    }
    AlertError.close()

    const result = imc(weight, height)
    displayResultMessage(result)
}
function displayResultMessage(result) {
    Modal.message.innerText = `Seu IMC é de ${result}`
    Modal.open()
}
form.oninput = () => AlertError.close()