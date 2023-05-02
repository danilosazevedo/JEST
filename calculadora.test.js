const calc = require ('./calculadora')


describe ('Teste para calculadora', () => {
    test('somar 2 e 2 deve resultar em 4', () => {
        const resultSoma = calc.soma(2,2)
    
        expect(resultSoma).toBe(4)
    })
    
    test('mult 3 e 3 deve ser 9', () => {
        const resultSoma = calc.mult(3,3)
    
        expect(resultSoma).toBe(9)
    })
})