//My attempt
// const btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
//     document.btn.style.backgroundColor = "white";
//     document.btn.style.Color = "red";
// })

var btn = document.querySelector("button");
var isRed = false;

//Colts Solution
// btn.addEventListener("click", function(){
//     if(isRed) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "red";
//     }
//     isRed = !isRed;
// })

//shorter version using classList Toggle

btn.addEventListener("click", function(){
    document.body.classList.toggle("red");
})