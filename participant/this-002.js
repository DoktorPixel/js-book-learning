class Animal {
    constructor() {
        this.gender = 'male'
    }


    arrow = () => console.log('Animal arrow this: ', this)

    declaration() {
        console.log('Animal declaration this', this)
    }
}

class Monkey extends Animal {
    constructor({ born }) {
        super()
        this.born = born;
    }


    getBornDate() {
        const yyyy = this.born.getFullYear();
        let mm = this.born.getMonth() + 1; // Months start at 0!
        let dd = this.born.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }
}

const monkey = new Monkey({ born: new Date() })

monkey.arrow()
monkey.declaration()

const born_date = monkey.getBornDate();
console.log('born_date', born_date);