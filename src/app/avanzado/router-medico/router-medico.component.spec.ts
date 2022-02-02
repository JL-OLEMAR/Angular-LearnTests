import { ActivatedRoute, Router } from '@angular/router'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { from, Observable } from 'rxjs'
import { RouterMedicoComponent } from './router-medico.component'

// Mock Router
class FakeRouter {
  navigate (params: []): any {}
}

// Mock ActivatedRoute
class FakeActivatedRoute {
  params: Observable<any> = from([{ id: 'nuevo' }])
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent
  let fixture: ComponentFixture<RouterMedicoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter }, // The Component uses the Router, so we need to mock it
        { provide: ActivatedRoute, useClass: FakeActivatedRoute } // The Component uses the ActivatedRoute
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Should redirect to \'/medico\' on save', async () => {
    const router = TestBed.inject(Router)
    const spy = spyOn(router, 'navigate')

    await component.saveMedico()
    expect(spy).toHaveBeenCalledWith(['medico', '12345678'])
  })

  it('The \'id\' parameter of the route must be \'nuevo\'', () => {
    expect(component.id).toBe('nuevo')
  })
})
