console.log(1)
console.log(-5 + 3)
console.log("-5 + 3")
console.log("Oleksiy is a very very good teacher today, and I love him very much")
console.log("Oleksiy is a very very good teacher today, and I love him very much")
console.log("Oleksiy is a very very good teacher today, and I love him very much")
console.log("Oleksiy is a very very good teacher today, and I love him very much")
console.log("Oleksiy is a very very good teacher today, and I love him very much")


var myRevelation = "I love programming very much today and tomorrow"
console.log(myRevelation)
console.log(myRevelation)
console.log(myRevelation)
console.log(myRevelation)
console.log(myRevelation)

console.log(typeof(5-7))
console.log(5-7)
console.log(5/0)
console.log(5/"string")
console.log(typeof(myRevelation))

var sister = {
    name: "Julia",
    age: 28,
    canAutoTest: false,
    numberOfHands: 5,
    isAlien: true,
    email: "julia@gmail.com",
    password: "qwerty123",
    token: "xxx-lust-xxx",
    refreshToken: "$$$-flowers-$$$",
    car: {
        manufacturer: "Pegeot",
        color: "yellow",
        wasDamaged: true

    }
}

console.log(typeof(sister))
console.log(sister)
console.log(sister.age)
console.log(sister.age + 5)
console.log(sister.age + 5 + 3)
console.log(sister.name)

var compressedSister = JSON.stringify(sister)
console.log(typeof(compressedSister))
console.log(compressedSister)
console.log(compressedSister.name)

var restoredSister = JSON.parse(compressedSister)
console.log(typeof(restoredSister))
console.log(restoredSister)
console.log(restoredSister.name)
console.log(restoredSister.car.color)


console.log(typeof(responseBody))
console.log(responseBody)

var restoredBody = JSON.parse(responseBody)
console.log(typeof(restoredBody))

var parsedBody = restoredBody
console.log(typeof(parsedBody))
console.log(parsedBody)
console.log(parsedBody.firstName)

var token = parsedBody.token
console.log(token)
pm.environment.set("AuthToken", token);
//console.log(pm)
//console.log(epm.response)
//console.log(pm.response.body)
//console.log(responseBody)
//console.log(typeof(responseBody))
//var headerValue = responseBody.get("token");
// pm.environment.set("AuthToken", headerValue);

