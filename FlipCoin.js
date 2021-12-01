// Use random function to check head or tail
let head = 0;
let check = Math.floor(Math.random()*10)%2;
if(check == head){
    console.log("Heads got");
}else{
    console.log("Tails got");
}