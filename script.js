const car = {
    type: 'electric',
    wheels: 4,
};

const sportCar = {
    doors: 2
};

Object.setPrototypeOf(sportCar, car);

console.log(sportCar);

const passengerCar = Object.create(car);
passengerCar.doors = 4;

console.log(passengerCar);

const toyCar = {
    type: 'toy'
}
Object.setPrototypeOf(toyCar, sportCar);

console.log(toyCar);





const employees = {
    // wallet: {},
    pay(month, sum) {
        this.wallet[month] = sum;
    },

};

const frontendDeveloper = {
    name: 'Mike',
    wallet: {}
};

Object.setPrototypeOf(frontendDeveloper, employees);


const backendDeveloper = {
    name: 'Bob',
    wallet: {}
};

Object.setPrototypeOf(backendDeveloper, employees);



backendDeveloper.pay('june', 1500);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);





function User(name, age) {
    this.name = name;
    this.age = age;
}

const user_1 = new User('Mike', 18);

const user_2 = new user_1.constructor('Bob', 25);

console.log(user_1);
console.log(user_2);





function UserType(name) {
    let arr = [];
    for (let i = 0; i < name.length; ++i) {
        this[i] = name[i];
        arr.push(name[i])
        if (i + 1 === name.length) {
            Object.defineProperty(this, 'lengts', {
                enumerable: true,
                writable: false,
                configurable: true,
                value: i + 1
            })
        }
    }

    return arr;
};

const admins = new UserType(['Mike', 'Bob', 'Nikola']);
console.log(admins.join('; '));
console.log(admins);
