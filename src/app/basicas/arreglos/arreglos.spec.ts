import { getRobots } from './arreglos'

describe('Pruebas de Arreglos', () => {
  it('Debe de retornar al menos 5 robots', () => {
    const resp = getRobots()
    expect(resp.length).toBeGreaterThanOrEqual(4)
  })

  it('Debe de existir MegaMan y Robocop', () => {
    const resp = getRobots()
    expect(resp).toContain('MegaMan')
    expect(resp).toContain('Robocop')
  })
})
