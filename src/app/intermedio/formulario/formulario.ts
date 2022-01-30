import { FormBuilder, FormGroup, Validators } from '@angular/forms'

export class FormularioRegister {
  form: FormGroup

  constructor (private readonly _fb: FormBuilder) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
}
