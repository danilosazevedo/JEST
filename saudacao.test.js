const saudacao = require ('./saudacao')

describe ('Teste para saudacao', () => {
    test('Deve retornar Olá, Maria', () => {
        const resultadoDizOla = saudacao.dizOla('Maria')
    
        expect(resultadoDizOla).toBe('Olá, Maria')
    })
})