function myValidation(){
    var validation = document.getElementById('myForm').value
    var res = document.getElementById('result')

    if(isNaN(validation) || validation < 1 || validation > 20) {
        res.textContent = 'Not a valid input'
    } else {
        res.textContent = 'Input is valid'
    }
}

// advanced validation form

document.querySelector('#userForm').addEventListener('submit', (event)=> {
    // this is to cjange browser default behavior
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value = ''
    event.target.realname.value = ''
})