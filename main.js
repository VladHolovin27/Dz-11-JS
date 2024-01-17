// 
const info = {
    name: 'Vlad', 
    car: "Tesla",
    rating: 5
}

const JSONinfo = JSON.stringify(info);
console.log(JSONinfo);

// 
const obj = "{'name': 'John', 'age': 25}";
try {
    let parseObj = JSON.parse(obj)
    console.log(parseObj);
} catch (error) {
    console.error("Error of parsing object:(");
}

// 
const secObj = '{"name": "Vlad", "age": 14}';
const JSONSecObj = JSON.parse(secObj)
console.log(JSONSecObj);

// 
const functionKeysValues = (values, key) => {
    let newObjP = JSON.parse(values)
    return key in newObjP;
}

let str = '{"name": "Artem", "age": 14}'
let key = 'age';

console.log(functionKeysValues(str, key));

// 
const infoForFunc = {
    name: 'Vlad', 
    car: "Kruto",
    rating: 10,
    ura: function() {
        console.log("Hi!");
    }
}

try {
 let strInfo = JSON.stringify(infoForFunc)
 console.log(strInfo);
} catch (error) {
    console.error(error.name);
}

// 
let arrObjs = [
    {name: "Vlad", "age": 14},
    {name: "Artem", "age": 14},
    {name: "Oleh", "age": 20}
];

let strArrObjs = JSON.stringify(arrObjs);
console.log(strArrObjs);

// 
let arrPeoples = ["Vlad", "Artem", "Oleh", "Maks", "Sofia"];
function addPerson() {
    let addToArr = arrPeoples.push("Jony");
    console.log(addToArr);
}