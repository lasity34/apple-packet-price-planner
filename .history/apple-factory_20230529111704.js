

function apple_factory(price, num, size, profit) {

    let apple_cost_price = price || 0;
    let num_apples = num || 0;
    let packet_size = size || 0;
    let profit_required = profit || 0;

    function apple_price(price) {
        apple_cost_price = price
    }

     function apple_count(num) {
        num_apples = num
     }

     function apple_size(packet) {
        packet_size = packet
     }

     function profit_input(input) {
        profit_required = input
     }

    function apples_price_length() {
        return apple_cost_price
    }

    function apple_count_length() {
        return num_apples
    }

    function apple_size_length() {
        return packet_size
    }

    function profit_required_length() {
        return profit_required
    }

    function number_of_packets() {
        const num_packets = packet_size % num_apples
        return num_packets
    }

    return {
        apple_price,
        apples_price_length,
        apple_count,
        apple_count_length,
        apple_size,
        apple_size_length,
        profit_input,
        profit_required_length,
        number_of_packets


    }
}