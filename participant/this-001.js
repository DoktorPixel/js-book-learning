const user_000 = {
    name: 'Monica',
    age: 24,
    nickname: 'little princess',
    a: this,
    hi: function (context){
        console.log(this, `context ${context}`)
    },
    arrow: () => {
        console.log('arrow', this)
    }
};

const user_001 = {
    name: 'Jana',
    age: 32,
    nickname: 'Deepthroat-1989',
    hi: function (value) {
        console.log(`hi inside user_001; value: ${value}`, this, this.name, this.age)
    }
}

// console.log(user_000.a)
// user_000.hi()
// user_000.hi.bind(user_001, 'user_001')()
// user_000.arrow()

const user_002 = {
    name: 'Jessica',
    age: 27,
    nickname: 'Dirty-Mother',
    children: {
        value: [{name: 'Robert'}, {name: 'Albert'}],
    },
    hi: function () {
        console.log('hi fucntion this:', this);
    }
};

// user_002.hi()