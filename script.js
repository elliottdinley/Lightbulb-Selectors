let lightbulbs = document.querySelectorAll("div .item");
let output = document.querySelector("h3.subtitle");
let count = 0;

lightbulbs.forEach(function(lb) {
    lb.addEventListener("click", function() {
        lb.classList.toggle("active");
        count ++
        if (count === 1) {
            output.innerHTML = "You've clicked the lights " + count + " time"
        } else {
            output.innerHTML = "You've clicked the lights " + count + " times"
        }
    });
});