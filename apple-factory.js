

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
        const num_packets = Math.floor( num_apples / packet_size)
        return num_packets
    }

    function cost_per_apple() {
        const price_per_apple = num_apples / apple_cost_price
        return price_per_apple.toFixed(2)
    }

    function cost_per_packet() {
        const price_per_packet = (apple_cost_price * packet_size) / num_apples;
    return price_per_packet.toFixed(2)
    }

    function recommended_price() {
        const recommended_price_packet = (cost_per_packet() * 1.15)
        return recommended_price_packet.toFixed(2)
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
        number_of_packets,
        cost_per_apple,
        cost_per_packet,
        recommended_price


    }
}