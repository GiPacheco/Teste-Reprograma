const{ calculadoraValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Receber o total do valor do projeto ', () => {
    
        beforeEach(() => {
            require('../../dominio/calculadora/Projeto/pacote').calcularPacote.mockReturnValue('pacote_basico')

        })
        test(' ', () => {
          const funcionalidades = [
            'setup',
            'responsividade',
            'ssr'
          ]
          const valorHora = 32;
          const resultado = calculadoraValorTotalProjeto(funcionalidades,valorHora);
            
      expect(resultado).toEqual(634)
    })


  })

