const calculate_btn = document.querySelector(".calculate_btn");

const num_packet_display = document.querySelector(".packets_display");
const cost_per_apple_display = document.querySelector(
  ".cost_per_apple_display"
);
const cost_per_packet_display = document.querySelector(
  ".cost_per_packet_display"
);
const recommended_price_packet = document.querySelector(
  ".recommeded_price_packet_display"
);

function apple_dom() {
  const apple_cost_input = document.getElementById("apple_price").value;
  const apple_num_input = document.getElementById("apple_num").value;
  const packet_size_input = document.getElementById("packet_size").value;
  const profit_required_input =
    document.getElementById("profit_required").value;

  const apple_fact = apple_factory(
    apple_cost_input,
    apple_num_input,
    packet_size_input,
    profit_required_input
  );
  num_packet_display.innerText = apple_fact.number_of_packets();
  cost_per_apple_display.innerText = `R${apple_fact.cost_per_apple()}`;
  cost_per_packet_display.innerText = `R${apple_fact.cost_per_packet()} `;
  recommended_price_packet.innerText = `R${apple_fact.recommended_price()}`;
}

calculate_btn.addEventListener("click", apple_dom);
