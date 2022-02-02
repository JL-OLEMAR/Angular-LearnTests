import { RUTAS } from './app.routes'
import { MedicoComponent } from 'intermedio2/medico/medico.component'

describe('Main Routes', () => {
  it('The path \'doctor/:id\' must exist', () => {
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent
    })
  })
})
