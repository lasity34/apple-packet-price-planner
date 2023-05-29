const calculate_btn = document.querySelector(".calculate_btn");
const apple_cost_input = document.getElementById("apple_price").value;
const apple_num_input = document.getElementById("apple_num").value;



const apple_fact = apple_factory(apple_cost_input, apple_num_input);

function apple_dom() {
 

  console.log(apple_fact.apples_price_length());
  console.log(apple_fact.apple_count_length());
}

calculate_btn.addEventListener("click", apple_dom);
