import { TestBed, ComponentFixture } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'

import { MedicoComponent } from './medico.component'
import { MedicoService } from './medico.service'

describe('Médico Component', () => {
  let component: MedicoComponent
  let fixture: ComponentFixture<MedicoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    })

    fixture = TestBed.createComponent(MedicoComponent)
    component = fixture.componentInstance
  })

  it('Must be created the component', () => {
    expect(component).toBeTruthy()
  })

  it('Must return the name of the doctor', () => {
    const nombre = 'Juan'
    const resp = component.saludardMedico(nombre)
    expect(resp).toContain(nombre)
  })
})
