const {calcularHorasdeProjeto} = require('../../src/dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular horas totais do projeto para sr finalizado', () => {
    test('calcular valor contido em um array de funcionalidades de um projeto', () => {
        
        const funcionalidades = [
            'setup',
            'resposividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'




        ]
        const result = calcularHorasdeProjeto(funcionalidades)
        console.log(result)

      expect(result).toEqual(0)
    })
  })