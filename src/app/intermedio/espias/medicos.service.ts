import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class MedicosService {
  constructor (private readonly _http: HttpClient) { }

  getMedicos (): Observable<any> {
    return this._http.get('...')
      .pipe(map((resp: any) => resp.medicos))
  }

  agregarMedico (medico: any): Observable<any> {
    return this._http.post('...', medico)
      .pipe(map((resp: any) => resp.medicos))
  }

  borrarMedico (id: string): Observable<any> {
    return this._http.delete('...')
      .pipe(map((resp: any) => resp.medicos))
  }
}
