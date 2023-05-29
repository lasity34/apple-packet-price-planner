

function apple_factory(price, num) {

    let apple_cost_price = price || 0;
    let num_apples = num || 0;

    function apple_price(price) {
        apple_cost_price = price
    }

    function apples_price_length() {
        return apple_cost_price
    }

    return {
        apple_price,
        apples_price_length
    }
}