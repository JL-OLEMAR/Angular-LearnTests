import { Component, OnInit } from '@angular/core'
import { MedicosService } from './medicos.service'

@Component({
  selector: 'app-medicos',
  template: `
    <p>Médicos works!</p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {
  public medicos: any[] = []
  public mensajeError!: string

  constructor (private readonly _medicoService: MedicosService) { }

  ngOnInit (): void {
    this._medicoService.getMedicos()
      .subscribe((medicos: any) => { this.medicos = medicos })
  }

  agregarMedico (): void {
    const medico = { nombre: 'Médico Juan Carlos' }

    this._medicoService.agregarMedico(medico)
      .subscribe(
        medicoDB => this.medicos.push(medicoDB),
        err => { this.mensajeError = err }
      )
  }

  borrarMedico (id: string): void {
    const confirmar = confirm('Estas seguro que desea borrar este médico')

    if (confirmar) {
      this._medicoService.borrarMedico(id)
    }
  }
}
