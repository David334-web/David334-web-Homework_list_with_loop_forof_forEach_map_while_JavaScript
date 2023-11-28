const pays = [
    "Haiti",
    "Brazil",
    "Costa Rica",
    "Canada",
    "Bahamas",
    "France",
    "Russie",
    "Israel"
];

function loop(){
    debugger;

    for(i = 0; i <= pays.length; i++){
        console.log(pays[i]);
    }
}

loop();


//for of
const cars = [
    "BMW",
    "Toyota",
    "Nissan",
    "Jeep",
    "Mercedes",
    "Tracker",
    "Vitara",
    "Rolls Royce"
];

for(item of cars){
    debugger;

    console.log(item);
}


//forEach
const fruits = [
    "Pomme",
    "Cerise",
    "Banane",
    "Orange",
    "Mangue",
    "Avocat",
    "Mandarine"
];

fruits.forEach((fruits) => {
    debugger;

    console.log(fruits);
});


//map
const legumes = [
    "Carotte",
    "Pomme De Terre",
    "Poivron",
    "Tomate",
    "Chou"
];

legumes.map(legumes =>{
    debugger;

    console.log(legumes);
});


//while
const phones = [
    "Iphone",
    "Samsung",
    "Motorola",
    "Sony",
    "Lenovo",
    "Coolpad"
];

while(phones < phones){
    debugger;

    phones++;
}

console.log(`${phones}`);