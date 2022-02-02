import { By } from '@angular/platform-browser'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])], // Initialize with empty routes
      schemas: [NO_ERRORS_SCHEMA] // ignore template errors
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title \'pruebas\'', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('pruebas')
  })

  // Testing RouterOutlet
  it('Must have a \'router-outlet\'', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet))
    expect(debugElement).not.toBeNull()
  })
})
