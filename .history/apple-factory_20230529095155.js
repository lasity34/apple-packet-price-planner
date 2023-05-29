

function apple_factory(price) {

    let apple_cost_price = price || 0

    function apple_price(price) {
        apple_cost_price = price
    }

    return {
        apple_price
    }
}