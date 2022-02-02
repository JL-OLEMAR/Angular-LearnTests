import { By } from '@angular/platform-browser'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterLinkWithHref } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { NavbarComponent } from './navbar.component'

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule] // without .withRoutes([])
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  // Testing RouterLink with href
  it('Must have a link to the medicos page', () => {
    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))

    let exist = false
    for (const elem of elements) {
      if (elem.attributes['routerLink'] === '/medicos') {
        exist = true
        break
      }
    }

    expect(exist).toBeTruthy()
  })
})
