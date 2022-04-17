// select the output
const myOutput = document.getElementById('output')

// function to display data on the screen
function renderData(data) {
    // clear everything inside <div> with id="my-output"
    myOutput.innerHTML = ''

    // run through each item inside data
    data.forEach(function(item) {

        // make a <div> element and fill it
        // <div> </div>
        const div = document.createElement('div')
        // <div class="submit-history-card"> </div>
        div.setAttribute('class', 'submit-history-card')
        // <div class="submit-history-card" data-key="20200708"> </div>
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
        myOutput.append(div);
    })
}

// checking local storage
if (localStorage.getItem('data')) {
    // converts back to array and store it in data array
    data = JSON.parse(localStorage.getItem('data'))

    // display data on the screen
    renderData(data)
}
