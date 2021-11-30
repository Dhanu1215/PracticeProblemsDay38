// Use random function and fine addition and average of 5 random two digit numbers.
let num1 = Math.floor(Math.random()*90+10);
let num2 = Math.floor(Math.random()*90+10);
let num3 = Math.floor(Math.random()*90+10);
let num4 = Math.floor(Math.random()*90+10);
let num5 = Math.floor(Math.random()*90+10);
let sum = (num1+num2+num3+num4+num5);
let average = sum / 5 ;
console.log("Sum and Average of two digit five random num is: "+sum+" "+"&"+" "+average);