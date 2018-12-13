class User {
    constructor(firstname, lastname, credits) {
        this.firstname = firstname
        this.lastname = lastname
        this.credits = credits
    }

    getFullName() {
        return `${this.firstname} ${this.lastname} is my full name`
    }

    editName(name) {
        let myName = name.split(" ")
        this.firstname = myName[0]
        this.lastname = myName[1] 
    }

}

class Teacher extends User {
    
    constructor(firstname, lastname, credits, subject) {
        super(firstname, lastname, credits)
        this.subject = subject
    }

    getFullName() {
        return `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`
    }

}

const ronald = new Teacher('Ronald', 'Reagan', 61, 'python')
console.log(ronald.getFullName());

ronald.editName('Donald Trump')
console.log(ronald.getFullName());
