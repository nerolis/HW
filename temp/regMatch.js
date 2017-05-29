// https://regexper.com/

let phone = '+7(123)456-7890';

let reg = /\+\d\(\d{3}\)\d{3}-\d{4}/;

console.log(phone.match(reg)) // ["+7(123)456-7890"]