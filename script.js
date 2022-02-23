// 1
let arr = [
    {
        model: 'tesla',
        price: 40000
    },
    {
        model: 'bugatty',
        price: 800000
    },
    {
        model: 'ferrari',
        price: 200000
    },
    {
        model: 'matiz',
        price: 4000
    },
    {
        model: 'mres',
        price: 120000
    },
    {
        model: 'bmw',
        price: 120000
    },
    {
        model: 'tico',
        price: 2000
    },
    {
        model:'Gentra Without Magnitafon',
        price: 1
    }
]
let cheap = []
let expensive = []

expensive = arr.filter(item => item.price < 7000 ? cheap.push(item): expensive.push(item))
console.log(cheap);


// 2
let array = [1,'string',true, false, 34, null, NaN, 34, 34, undefined]

let num = array.filter(item => {
    if (typeof item === 'number' || typeof item > 5) {
        console.log('Good');
    }
})


// 3
