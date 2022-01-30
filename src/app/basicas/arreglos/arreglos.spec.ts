import { getRobots } from './arreglos'

/* for ignore a test is with "x" it will be ignored
  example1: xdescribe("", () => {})
  example2: xit("", () => {})
*/

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
