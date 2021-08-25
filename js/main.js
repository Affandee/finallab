let btn = document.querySelector("#btn1")

let closeup = document.querySelector("#close")

btn.addEventListener("click", function(){
    document.querySelector("#hotsell").classList.add("show")
})

closeup.addEventListener("click", function(){
    document.querySelector("#hotsell").classList.remove("show")
})



let btn2 = document.querySelector("#btn2")

let closeup2 = document.querySelector("#close2")

btn2.addEventListener("click", function(){
    document.querySelector("#form").classList.add("show_2")
})

closeup2.addEventListener("click", function(){
    document.querySelector("#form").classList.remove("show_2")
})

 
let bars = document.querySelector("#clickbar")

let closeup3 = document.querySelector("#pop_close")


bars.addEventListener("click", function(){
    document.querySelector("#mobile_pop").classList.add("show_2")
            
})

closeup3.addEventListener("click", function(){
    document.querySelector("#mobile_pop").classList.remove("show_2")
})
