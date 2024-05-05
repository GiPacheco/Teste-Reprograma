const {calculadoraValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

describe('retornar valor arredondado correto dado o valor que recebemos ao mês ', () => {
    test('retornar valor que ganhamos por hora de trabalho ', () => {
        const valorPorMes = 5000

        const result = calculadoraValorPorHora (valorPorMes)
      expect(result).toEqual(29)
    })
  })