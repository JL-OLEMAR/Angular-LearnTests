import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {
  @ViewChild('txtProgress', { static: false }) txtProgress!: ElementRef

  @Input('nombre') leyenda: string = 'Leyenda'
  @Input() progreso: number = 50

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter()

  cambiarValor (valor: number): any {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100
      return
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0
      return
    }

    this.progreso = this.progreso + valor
    this.cambioValor.emit(this.progreso)
  }

  onChanges (newValue: number): void {
    if (newValue >= 100) {
      this.progreso = 100
    } else if (newValue <= 0) {
      this.progreso = 0
    } else {
      this.progreso = newValue
    }

    this.txtProgress.nativeElement.value = this.progreso
    this.cambioValor.emit(this.progreso)
  }
}
