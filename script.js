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
