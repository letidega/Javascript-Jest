const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollartoYen } = require('./app.js')
    
     expect(fromDollartoYen(3.5)).toBe(447.65000000000003); 
})

test("127.9 yen should be 0.8 pound", function(){
    const { fromYenToPound } = require('./app.js')
    
     expect(fromYenToPound(250)).toBe(200); 
})