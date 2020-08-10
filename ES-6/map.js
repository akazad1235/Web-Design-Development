var numbers = [1,2,3,4,5,6,7]

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    
    const result = element*element 
    console.log(result);
}
//using map funtion
numbers.map(function(element, index, array){
    console.log(element, index, array);

})

//function using map
function square(element){
        return element*element

}

console.log(numbers.map(square));

numbers.map(function(element){
    console.log(element);
})

//sort arrow
let squares = element => element*element
console.log(numbers.map(squares));

var result = numbers.filter(element => element<4)
console.log(result);


const students = [
    {id:23, name:'md.azad'},
    {id:20, name:'md.azad 1'},
    {id:40, name:'md.azad 2'},
    {id:45, name:'md.azad 3'},
]

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    
    console.log(element.id);
    console.log(element.name);
}

let studentResult = students.map(x => x.id)
console.log(studentResult)

let bigger = students.filter(x => x.id >23)
console.log(bigger);
let biggerOne = students.find(x => x.id >23)
console.log(biggerOne);

