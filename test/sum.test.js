const sum = require("../src/sum")

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('adds 2 + 2 to equal 6', () => {
    expect(sum(2, 2)).toBe(6);
});
