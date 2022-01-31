import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MedicoService } from './intermedio2/medico/medico.service'

import { AppComponent } from './app.component'
import { HospitalComponent } from './intermedio2/hospital/hospital.component'
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component'
import { MedicoComponent } from './intermedio2/medico/medico.component'
import { MedicosComponent } from './intermedio/espias/medicos.component'

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    IncrementadorComponent,
    MedicoComponent,
    MedicosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
