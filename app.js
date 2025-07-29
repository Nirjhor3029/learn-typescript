var age = 10;
console.log(age);

var userList = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
console.log(userList);


var nameList = userList;
nameList[0].name = 'Nirjhor';
console.log(nameList[0].name);

console.log(userList);
