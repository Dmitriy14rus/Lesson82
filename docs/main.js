function firstName(name) {
    return 'Hello ' + name
}

const resultOne = firstName('dmitriy')

console.log(resultOne)

// =========================================================================================
const number = [2, 12, 3, 14, 5, 10, 32, 7, 1]

function numberGreaterTen(item) {

    for (let i = 0; i < item.length; i++) {
        if (item[i] > 10) {
            console.log(item[i])
        }
    }

}
console.log(numberGreaterTen(number))

// ==========================================================================================

function combingOut(oneNumber, twoNumber, operation) {
    if (operation =='plus'){
        result = oneNumber + twoNumber
        console.log (result)
    }
    if (operation =='minus'){
        result = oneNumber - twoNumber
        console.log (result)
    }
    if (operation =='multiplication'){
        result = oneNumber * twoNumber
        console.log (result)
    }
    if (operation =='division'){
        result = oneNumber / twoNumber
        console.log (result)
    }
    
}
console.log (combingOut(10, 5, 'plus'))




