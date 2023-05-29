const calculate_btn = document.querySelector(".calculate_btn");
const apple_cost_input = document.getElementById("apple_price").value;
const apple_num_input = document.getElementById("apple_num").value;
const packet_size_input = document.getElementById("packet_size").value;
const profit_required_input = document.getElementById("profit_required").value;




const apple_fact = apple_factory(apple_cost_input, apple_num_input, packet_size_input, profit_required_input);

function apple_dom() {
 

 
}

calculate_btn.addEventListener("click", apple_dom);
