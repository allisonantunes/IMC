import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notNumber, imc } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close') */

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)
    //se um dos 2 nao for numero retorna true.

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