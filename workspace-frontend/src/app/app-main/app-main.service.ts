import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppMainService {
    constructor(private http: Http) {
    }

    listarValores(): Observable<any> {
        return this.http.get('http://localhost:8085/ClienteWeb/servico/cliente/valores');
    }
}
