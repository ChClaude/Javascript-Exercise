//alert('File is attached')

//console.log(document.head)
//document.title = 'titleChanged'

// const myElement = document.querySelectorAll('p'); 

// console.log(myElement);

//const elmnt = document.querySelector('p')

//console.log(elmnt)

//elmnt.textContent = 'This has been changed by javascript'

const selElemnt = document.querySelectorAll('p')

selElemnt.forEach((p, i)=> {
    p.textContent = `${i} we have all been changed using JS`
})

const myPara = document.createElement('p')

myPara.textContent = 'this was added via javasript'

document.querySelector('body').appendChild(myPara)

document.querySelector('button').addEventListener('click', (event)=> {
    event.target.textContent= 'I was clicked'
})
    
document.querySelector('#myForm').addEventListener('input', (event)=> {
    console.log(event.target.value)
})


