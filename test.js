const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollartoYen } = require('./app.js')

    const dollars = fromDollartoYen(3.5)

    const expected = 3.5 * 127.9; 
    
     expect(fromDollartoYen(3.5)).toBe(447.65000000000003); 
})

test("127.9 yen should be 0.8 pound", function(){
    const { fromYenToPound } = require('./app.js')

    const dollars = fromYenToPound(250)

    const expected = 250 * 0.8; 
    
     expect(fromYenToPound(250)).toBe(200); 
})