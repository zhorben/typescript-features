"use strict";
/* eslint-disable no-unused-vars */
let period = 60;
const baseUrl = 'http://localhost';
let firstName = 'Ihor';
let account = {
    firstName,
    getName() {
        return this.firstName;
    }
};
let person = { ...account };
let dates = { ...[11, 12, 13] };
let { firstName: myName } = person;
let [firstDate] = dates;
for (let date of dates) {
    console.log(date);
}
let sum = (a, b) => a + b;
class Point {
}
function userMessage([start, end], { firstName: name }) {
    return `${start}${name}${end}`;
}
console.log(userMessage `Good day, ${person} !!`);
