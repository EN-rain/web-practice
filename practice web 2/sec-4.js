let next = document.querySelector(".sec-4-button-next")
let prev = document.querySelector(".sec-4-button-prev")

next.addEventListener("click", function(){
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])
})

prev.addEventListener("click", function(){
    let items = document.querySelectorAll(".item")
    document.querySelector('.slide').insertBefore(items[items.length - 1], items[0]);
})  