import { usuarioIngresado } from './booleanos'

describe('Pruebas de Booleanos', () => {
  it('Debe de retornar Truthy', () => {
    const resp = usuarioIngresado()
    expect(resp).toBeTruthy()
  })

  it('Debe de retornar "No Truthy"', () => {
    const resp = usuarioIngresado()
    expect(resp).not.toBeFalsy()
  })
})
