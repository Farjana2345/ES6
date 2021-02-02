const person = {Name:'shima',age:24,hubby:'azhar',phone:'01815497740',address:'sweden'}
// const Name = person.Name;
// const Hubby = person.hubby;
const {Name, age, hubby, phone} = person;

console.log(Name, hubby, age, phone,hubby);

const friends = ['lima','suhi','mukta','soniya','somaiya']
const [firstFriend,last, ...next ] = friends;
console.log(next);

// complex object
const complexObject = {
    name:'abc',
    info:{
        address:'cumilla',
        phone:'sweden'
    }
}
const {phone} = complexObject.info;