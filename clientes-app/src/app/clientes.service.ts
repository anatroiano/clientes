import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL : string = environment.apiURL + '/api/clientes';

  constructor(private http: HttpClient ) {
    
  }

  salvar( cliente : Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  editar( cliente : Cliente ) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL)
  }

  getClienteById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  excluir(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`)
  }
}
