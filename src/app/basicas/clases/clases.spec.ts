import { Jugador } from './clases'

describe('Pruebas de clase', () => {
  // Instanciar un objeto de la clase Jugador
  let jugador = new Jugador()

  // Ciclos de vida de las pruebas
  // beforeAll() -> Se ejecuta antes de todos los tests
  // beforeEach() -> Se ejecuta antes de cada test
  // afterAll() -> Se ejecuta después de todos los tests
  // afterEach() -> Se ejecuta después de cada test

  beforeEach(() => {
    jugador = new Jugador()
  })

  it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
    const hp = jugador.getDamage(20)
    expect(hp).toBe(80)
  })

  it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
    const hp = jugador.getDamage(50)
    expect(hp).toBe(50)
  })

  it('Debe de retornar 0 de hp, si recibe 180 de daño', () => {
    const hp = jugador.getDamage(180)
    expect(hp).toBe(0)
  })
})
