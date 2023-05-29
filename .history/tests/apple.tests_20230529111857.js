describe("This will test different input values", function () {
  it("this will test different costs prices for apples", function () {
    const apple_instance = apple_factory();

    apple_instance.apple_price(15);

    assert.equal(15, apple_instance.apples_price_length());

    apple_instance.apple_price(13);

    assert.equal(13, apple_instance.apples_price_length());
  });

  it("this will test number of apples in box", function () {
    const apple_instance = apple_factory();

    apple_instance.apple_count(20)

    assert.equal(20, apple_instance.apple_count_length());

    apple_instance.apple_count(15);

    assert.equal(15, apple_instance.apple_count_length());
  });

  it("this will test packet size of the apples", function () {
    const apple_instance = apple_factory();

    apple_instance.apple_size(10)

    assert.equal(10, apple_instance.apple_size_length());

    apple_instance.apple_size(8);

    assert.equal(8, apple_instance.apple_size_length());
  });

  it("this will test the profit required value", function () {
    const apple_instance = apple_factory();

    apple_instance.profit_input(20)

    assert.equal(20, apple_instance.profit_required_length());

    apple_instance.profit_input(15);

    assert.equal(15, apple_instance.profit_required_length());
  });
});


describe("This will test different calculations", function() {
  const apple_instance = apple_factory();

  apple_instance.apple_count(20)
  apple_instance.apple_size(8)

  assert.equal(2, apple_instance.number_of_packets())
})
