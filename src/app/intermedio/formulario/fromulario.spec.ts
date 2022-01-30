import { FormularioRegister } from './formulario'
import { FormBuilder } from '@angular/forms'

describe('Formularios', () => {
  let componente: FormularioRegister

  // Init form
  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder())
  })

  // Fields the form
  it('The form must contain the fields "email" and "password"', () => {
    expect(componente.form.contains('email')).toBeTruthy()
    expect(componente.form.contains('password')).toBeTruthy()
  })

  // Fields validators
  it('Email validation should NOT be required', () => {
    const controlEmail = componente.form.controls['email']
    controlEmail.setValue('')
    expect(controlEmail.valid).toBeFalsy()
  })

  it('Email validation should NOT be valid', () => {
    const controlEmail = componente.form.controls['email']
    controlEmail.setValue('test1@')
    expect(controlEmail.valid).toBeFalsy()
  })

  it('Email validation should be required and valid', () => {
    const controlEmail = componente.form.controls['email']
    controlEmail.setValue('test1@test.com')
    expect(controlEmail.valid).toBeTruthy()
  })
})
