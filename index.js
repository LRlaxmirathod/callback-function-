/// callback function 


setTimeout(() => {
    console.log("settime")
}, 1000);
function x(y){
console.log("x")
y()
}

x(function y(){
console.log("y")
})