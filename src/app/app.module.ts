import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { RUTAS } from 'avanzado/rutas/app.routes'
import { MedicoService } from 'intermedio2/medico/medico.service'

import { AppComponent } from 'app.component'
import { HospitalComponent } from 'intermedio2/hospital/hospital.component'
import { IncrementadorComponent } from 'intermedio2/incrementador/incrementador.component'
import { MedicoComponent } from 'intermedio2/medico/medico.component'
import { MedicosComponent } from 'intermedio/espias/medicos.component'
import { NavbarComponent } from 'avanzado/navbar/navbar.component'
import { RouterMedicoComponent } from 'avanzado/router-medico/router-medico.component'

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    IncrementadorComponent,
    MedicoComponent,
    MedicosComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RUTAS)
  ],
  exports: [NavbarComponent],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
