document.addEventListener("DOMContentLoaded", function() {
    var model1 = document.getElementById("model-1");

    model1.addEventListener("mouseenter", function() {
        var pName = model1.querySelector(".p-name");
        var pNum = model1.querySelector(".p-num");
        var cover = model1.querySelector(".cover");
        var image = model1.querySelector(".model-1-image");

        pName.style.color = "red";
        pNum.style.color = "red";
        cover.style.backgroundColor = "violet";
        cover.style.opacity = .3 ;
        image.style.left = "-65px";
    });

    model1.addEventListener("mouseleave", function() {
        var pName = model1.querySelector(".p-name");
        var pNum = model1.querySelector(".p-num");
        var cover = model1.querySelector(".cover");
        var image = model1.querySelector(".model-1-image");

        pName.style.color = "black";
        pNum.style.color = "black";
        cover.style.backgroundColor = "black";
        cover.style.opacity = .5;
        image.style.left = "-45px";
    });
});