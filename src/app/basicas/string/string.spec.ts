import { mensaje } from './string'

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Jose')
    expect(typeof resp).toBe('string')
  })

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Jose'
    const resp = mensaje(nombre)

    // Evalua que resp contenga el nombre en cualquier parte del string
    expect(resp).toContain(nombre)
  })
})
