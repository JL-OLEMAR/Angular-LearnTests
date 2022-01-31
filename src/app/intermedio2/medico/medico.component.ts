import { Component, OnInit } from '@angular/core'
import { MedicoService } from './medico.service'

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  medicos: any[] = []

  constructor (private readonly _medicoService: MedicoService) { }

  ngOnInit (): void {
  }

  saludardMedico (nombre: string): string {
    return `Hola ${nombre}`
  }

  loadMedicos (): void {
    this._medicoService.getMedicos()
      .subscribe((medicos: any[]) => (this.medicos = medicos))
  }
}
