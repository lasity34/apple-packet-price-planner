
const apple_cost_input = document.getElementById("apple_price").value
const apple_num_input = document.getElementById("apple_num").value
const calculate_btn = document.querySelector(".calculate_btn")

const apple_fact = apple_factory()


function apple_dom() {

    console.log(apple_cost_input)
    console.log(apple_num_input)
}

calculate_btn.addEventListener("click", apple_dom)