let lightbulbs = document.querySelectorAll("div .item");
let output = document.querySelector("h3.subtitle:first-of-type");
let count = 0;

const amount_of_lightbulbs = document.querySelector("#dropdown")
const row_of_lightbulbs = document.querySelector(".row")

function updateEventListeners() {
    lightbulbs.forEach(function(lb) {
        lb.addEventListener("click", function() {
            lb.classList.toggle("active");
            count ++;
            if (count === 1) {
                output.innerHTML = "You've clicked the lights " + count + " time";
            } else {
                output.innerHTML = "You've clicked the lights " + count + " times";
            };
        });
    });
}

amount_of_lightbulbs.addEventListener("change", function() {
    const selected_value = amount_of_lightbulbs.value;
    row_of_lightbulbs.innerHTML = "";

    for (let i = 0; i < selected_value; i++) {
        const new_lightbulb = `<div id="lightbulb${i + 1}" class="item lightbulb">💡</div>`;
        row_of_lightbulbs.insertAdjacentHTML("beforeend", new_lightbulb)
    }
    
    console.log(row_of_lightbulbs)
    lightbulbs = document.querySelectorAll("div .item")
    console.log(lightbulbs)
    updateEventListeners()
});

updateEventListeners()