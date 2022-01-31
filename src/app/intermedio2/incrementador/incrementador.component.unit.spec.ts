import { IncrementadorComponent } from './incrementador.component'

describe('Incrementador Component Unit', () => {
  let component: IncrementadorComponent

  beforeEach(() => (component = new IncrementadorComponent()))

  it('Progress must not exceed 100', () => {
    component.progreso = 60
    component.cambiarValor(5)
    expect(component.progreso).toBe(65)
  })
})
