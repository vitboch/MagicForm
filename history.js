// we can access the id directly without creating
// const myOutput = document.getElementById('output')

// function to display data on the screen
function renderData(data) {

    // clear everything inside <div> with id="output"
    output.innerHTML = ''

    // run through each item inside data
    data.forEach(function(item) {

        // make a <div> element and fill it
        // <div></div>
        const div = document.createElement('div')

        // <div class="submit-history-card"> </div>
        div.setAttribute('class', 'submit-history-card')

        // <div class="submit-history-card" data-key="1650207086064"></div>
        div.setAttribute('data-key', item.id)

        /*
                        <div class="submit-history-card" data-key="1650207086064">
                            First Name
                            <p class="card-first-name">Vit</p>
                            Last name
                            <p class="card-last-name">Boch</p>
                            Email
                            <p class="card-email">vb@vitboch.com</p>
                            Phone
                            <p class="card-phone">+123456789</p>
                            Company
                            <p class="card-company">VitBoch</p>
                            Address
                            <p class="card-address">planet Earth</p>
                            <button class="delete-button btn btn-primary">Delete</button>
                        </div>
        */
        div.innerHTML = `    
                            First Name
                            <p class="card-first-name">${item.name.firstName}</p>
                            Last name
                            <p class="card-last-name">${item.name.lastName}</p>
                            Email
                            <p class="card-email">${item.name.email}</p>
                            Phone
                            <p class="card-phone">${item.name.phone}</p>
                            Company
                            <p class="card-company">${item.name.company}</p>
                            Address
                            <p class="card-address">${item.name.address}</p>
                            <button class="delete-button btn btn-primary">Delete</button>
                        `

        // add the <div> to the <div>
        output.append(div)
    })
}

// function to add data to local storage
function addToLocalStorage(data) {

    // convert the array to string then store it
    localStorage.setItem('data', JSON.stringify(data))

    // render them to screen
    renderData(data)
}

// deletes a card from data array
// then updates localstorage and renders updated list to screen
function deleteTask(id) {

    // filters out the <p> with the id and updates the data array
    data = data.filter(function(item) {

        // use != not !==
        // because here types are different
        // one is number and other is string
        return item.id != id
    })

    // update the local storage
    addToLocalStorage(data)
}

// add event listener <div>
// because we need to listen for click event in all delete-button
output.addEventListener('click', function(event) {

    // check if that is a delete button
    if (event.target.classList.contains('delete-button')) {

        // get id from data-key attribute's value of parent <div> where the delete-button is present
        deleteTask(event.target.parentElement.getAttribute('data-key'))
    }
})

// if there are changes local storage
if (localStorage.getItem('data')) {

    // converts back to array and store it in data array
    data = JSON.parse(localStorage.getItem('data'))

    // display data on the screen
    renderData(data)
}

// reload page on local storage change
window.addEventListener('storage', () => location.reload())
