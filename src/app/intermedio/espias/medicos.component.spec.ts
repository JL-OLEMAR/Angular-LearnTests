import { from, EMPTY, throwError } from 'rxjs'
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

  it('Must call the service to add a doctor', () => {
    // Mock the service
    const espia = spyOn(medicoService, 'agregarMedico').and.callFake(() => EMPTY)
    medicoComponent.agregarMedico()
    expect(espia).toHaveBeenCalled()
  })

  it('Must add a new doctor to the array of doctors', () => {
    const medico = { id: 1, nombre: 'Juan' }
    spyOn(medicoService, 'agregarMedico').and.returnValue(from([medico]))
    medicoComponent.agregarMedico()
    expect(medicoComponent.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
  })

  it('It should show the error message, if it fails to add a new doctor', () => {
    const error = 'Error al agregar el médico'
    spyOn(medicoService, 'agregarMedico').and.returnValue(throwError(() => error))
    medicoComponent.agregarMedico()
    expect(medicoComponent.mensajeError).toBe(error)
  })
})
