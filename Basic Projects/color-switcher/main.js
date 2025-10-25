let boxList = document.querySelectorAll(".color")
let body = document.querySelector("body")
boxList.forEach(function (color) {
    color.addEventListener("click",function(event){
        if(true){
            body.style.backgroundColor = event.target.id
        }
    })
})