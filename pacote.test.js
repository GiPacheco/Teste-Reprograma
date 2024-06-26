const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')
describe('Calcular pacote corretamente para classificar o projeto', () => {
    test('Retornar pacote basico caso o numero total seja de até 50', () => {
        
        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_basico')
    })
    test('Retornar pacote basico caso o numero total seja ate 50', () => {
        
        const totalDeHorasPorProjeto = 50
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_basico')
    })
    test('Retornar pacote intermediário caso o numero total seja entre 51 e 100', () => {
        
        const totalDeHorasPorProjeto = 56
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_intermediario')
    })
    test('Retornar pacote premium caso o numero total seja superior a 200', () => {
        
        const totalDeHorasPorProjeto = 200
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual('pacote_premium')
    })
})