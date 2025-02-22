// script.js
document.addEventListener("DOMContentLoaded", function () {
    const dancer = document.getElementById("dancer");
    let angle = 0;
    
    function animateDancer() {
        angle += 5;
        dancer.style.transform = rotate(${Math.sin(angle * Math.PI / 180) * 10}deg);
        requestAnimationFrame(animateDancer);
    }
    
    animateDancer();
    
    document.body.addEventListener("click", () => {
        alert("Keep Dancing!");
    });
});