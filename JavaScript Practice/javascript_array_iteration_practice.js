// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
var employees = [    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
]  

console.log ("------------------FILTER ---------------------------")
console.log(employees.filter((item) => {
    
    return item.age <= 30
}))


console.log("------------------MAP ---------------------------")
console.log(employees.map((item) => {

    return item.age * 2
}))



console.log("------------------FIND ---------------------------")
console.log(employees.find((item) => {

    return item.name ==="John"
}))



console.log("------------------FOR EACH ---------------------------")
employees.forEach((item) => {

    console.log(item.age / 2 ) // No return statement for forEach
})



console.log("------------------SOME ---------------------------")
const hasYoungAge = employees.some((employee) => {
    return employee.age <25
})
console.log(hasYoungAge)



console.log("------------------EVERY ---------------------------")
const allYoungAge = employees.every((employee) => {
    return employee.age < 25
})
console.log(allYoungAge)



console.log("------------------ REDUCE ---------------------------")

const totalAge = employees.reduce ((currentTotal, employee) =>{
    return employee.age + currentTotal
}, 0)

console.log(totalAge)


console.log("------------------INCLUDE ---------------------------")
console.log(employees.map((item) => {

    return item.age * 2
}))

