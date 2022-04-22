// set values for each input
document.getElementById('first-name').value = getSavedValue('first-name')
document.getElementById('last-name').value = getSavedValue('last-name')
document.getElementById('email').value = getSavedValue('email')
document.getElementById('phone').value = getSavedValue('phone')
document.getElementById('company').value = getSavedValue('company')
document.getElementById('address').value = getSavedValue('address')

// save value to localStorage as (ID, VALUE)
function saveValue(event) {

    // get the id
    const myId = event.id

    // get the value
    const myValue = event.value

    // save a key/value pair
    localStorage.setItem(myId, myValue)
}

// get data by key
function getSavedValue (myValue) {
    if (!localStorage.getItem(myValue)) {
        return ''
    }
    return localStorage.getItem(myValue)
}

// clear all input fields
function clearInputs() {
    return window.localStorage.clear()
}

// select the form
const myForm = document.getElementById('form')

// create an array that contains all data
let data = []

// add an event listener to the form
myForm.addEventListener('submit', function(event) {

    // prevent the page from reloading when submitting the form
    event.preventDefault()

    // add object with key and value of each input
    let inputCard = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        address: document.getElementById('address').value
    }

    // call function with input box current value
    addCard(inputCard)
})

// function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('data')

    // if reference exists
    if (reference) {

        // converts back to array and store it in data array
        data = JSON.parse(reference)
    }
}

// function to add card
function addCard(item) {

    // if item is not empty
    if (item !== '') {

        // make a card object
        // which has id, name, and completed properties
        const card = {
            id: Date.now(),
            name: item,
        }

        // add it to data array
        data.push(card)

        // store it in local storage
        // convert the array to string then store it
        localStorage.setItem('data', JSON.stringify(data))

        // clear the form
        myForm.reset()
    }
}

// add interval to get data from local storage
setInterval(getFromLocalStorage, 100)

// reload page on local storage change
window.addEventListener('storage', () => location.reload())

