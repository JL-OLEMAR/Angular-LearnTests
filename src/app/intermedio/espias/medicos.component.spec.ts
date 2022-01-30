import { from } from 'rxjs'
import { MedicosService } from './medicos.service'
import { MedicosComponent } from './medicos.component'

describe('(1) Another way to initialize the doctorService, MedicosComponent', () => {
  let medicoComponent: MedicosComponent
  const medicoService = new MedicosService(null as any)

  beforeEach(() => {
    medicoComponent = new MedicosComponent(medicoService)
  })

  it('Init: Must load the doctors', () => {
    const medicos = ['medico1', 'medico2', 'medico3']

    // Mock the service
    spyOn(medicoService, 'getMedicos').and.callFake(() => from([medicos]))

    medicoComponent.ngOnInit()
    expect(medicoComponent.medicos.length).toBeGreaterThan(0)
  })
})
