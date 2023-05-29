

describe("This will test different input values", function() {

    it("this will test different costs prices for apples",  function() {
        const apple_instance = apple_factory()

        apple_instance.apple_price(15)

        assert.equal(15, apple_instance.apples_price_length())

      

        apple_instance.apple_price(13)

        assert.equal(13, apple_instance.apples_price_length())

    })
})