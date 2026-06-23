const lantern = document.getElementById(“lantern”);

lantern.addEventListener(“mouseenter”, function(){
lantern.style.animationPlayState = “paused”;
});

lantern.addEventListener(“mouseleave”, function(){
lantern.style.animationPlayState = “running”;
});