let a = 10;
let b = 20;
let c = a + b;
console.log("Number Addition :" + c);

let s1 = "10";
let s2 = "20";
let s3 = s1 + s2;
console.log("String Addition : " + s3);

let d = new Date();
let Today = " Today is : " +(d.getMonth() +1) + "/" +(d.getDate() +1)+ "/" +(d.getFullYear() +1);
let time = "Time" + d.getHours() + ":" + (d.getMinutes());
console.log(Today);