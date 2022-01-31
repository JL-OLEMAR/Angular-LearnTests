import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  constructor (private readonly _http: HttpClient) { }

  getMedicos (): Observable<any> {
    return this._http.get('...')
  }
}
