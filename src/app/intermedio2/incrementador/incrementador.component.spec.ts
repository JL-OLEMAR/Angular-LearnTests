import { TestBed, ComponentFixture } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'

import { IncrementadorComponent } from './incrementador.component'

describe('Incremendator Component', () => {
  let component: IncrementadorComponent
  let fixture: ComponentFixture<IncrementadorComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    })

    fixture = TestBed.createComponent(IncrementadorComponent)
    component = fixture.componentInstance
  })

  // Get the element by the selector
  it('Should show \'Leyenda\'', () => {
    component.leyenda = 'Progreso de carga'
    fixture.detectChanges()
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement
    expect(elem.innerHTML).toContain('Progreso de carga')
  })

  // Get value from input
  it('Should show at the input the value of the progress', async () => {
    component.cambiarValor(5)
    fixture.detectChanges()
    // with async
    await fixture.whenStable() // wait for all changes to be applied
    const elem: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement
    expect(elem.valueAsNumber).toBe(55)

    // with promises
    // fixture.whenStable().then(() => {
    //   const input = fixture.debugElement.query(By.css('input'))
    //   const elem = input.nativeElement
    //   expect(elem.value).toBe('55')
    // })
  })

  // Action buttons
  it('Must increment/decrement by 5, with a click on the button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'))
    buttons[0].triggerEventHandler('click', null) // btn decrement
    expect(component.progreso).toBe(45) // 50 - 5

    buttons[1].triggerEventHandler('click', null) // btn increment
    expect(component.progreso).toBe(50) // 45 + 5
  })

  it('Should show \'Leyenda - 45\' when clicking the decrement button', async () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'))
    buttons[0].triggerEventHandler('click', null) // btn decrement
    fixture.detectChanges()

    const elem = fixture.debugElement.query(By.css('h3')).nativeElement
    expect(elem.innerHTML).toBe('Leyenda - 45')
  })
})
