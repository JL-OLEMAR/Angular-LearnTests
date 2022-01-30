import { TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs'

import { MedicosService } from './medicos.service'
import { MedicosComponent } from './medicos.component'

describe('(2) Another way to initialize the doctorService, MedicosComponent', () => {
  let medicoComponent2: MedicosComponent
  let medicoService: MedicosService

  beforeEach(() => {
    // Conf of the test
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MedicosService]
    })
    // Inject the service a set of methods to test
    medicoService = TestBed.inject(MedicosService)

    // Create a component to test with the service injected
    medicoComponent2 = new MedicosComponent(medicoService)
  })

  it('Init: Must load the doctors', () => {
    const medicos = ['medico1', 'medico2', 'medico3']

    // Mock the service
    spyOn(medicoService, 'getMedicos').and.callFake(() => from([medicos]))

    medicoComponent2.ngOnInit()
    expect(medicoComponent2.medicos.length).toBeGreaterThan(0)
  })
})
