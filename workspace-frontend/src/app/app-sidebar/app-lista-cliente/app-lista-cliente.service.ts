import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppListaClienteService {
    constructor(private http: Http) {
    }

    listarClientes(): Observable<any> {
        return this.http.get('http://localhost:8085/ClienteWeb/servico/cliente/listar');
    }
}
