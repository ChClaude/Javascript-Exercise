// how to create a node and add it to a webpage

/*var h = document.createElement('h1')
var value = document.createTextNode('Hello World!!!')

h.appendChild(value)

document.querySelector('h1').appendChild(h)*/

var ul = document.getElementById('list')
var li;

var add = document.querySelector('#add')
add.addEventListener('click', addItem)

var remove = document.querySelector('#remove')
remove.addEventListener('click', removeItem)


function addItem () {
    var input = document.getElementById('input')
    var item = input.value
    var text = document.createTextNode(item)

    if( item === '') {
        return false;
        // add a p tag and promp the user to enter valid item
    } else {
        // create li
        li = document.createElement('li')

        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        // create label
        var label = document.createElement('label')
        label.appendChild(text)

        li.appendChild(checkbox)
        li.appendChild(label)
        ul.appendChild(li)
        ul.insertBefore(li, ul.childNodes[0])
        
        // adding visual effect
        setTimeout(() => {
            li.className= 'visual'
        }, 2);
        input.value = ''
    }
}

function removeItem() {
    li = ul.children

    for (let index = 0; index < li.length; index++) {
        //const element = li[index];
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}