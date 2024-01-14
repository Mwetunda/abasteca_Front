import { Injectable } from "@angular/core";
import {HttpHeaders, HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { environment } from "environments/environment";

const httpOptions = {
    headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
    }),
};

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiURL}`;
    }

    getUsuarios(modelo: any): Observable<any> {
        return this.http.post(this.baseUrl + "usuario/lista/usuarios/", modelo, httpOptions).pipe();
    }

    getOperadores(modelo: any): Observable<any> {
        return this.http.post(this.baseUrl + "usuario/lista/usuarios/", modelo, httpOptions).pipe();
    }


    getUsuario(idUsuario: number): Observable<any> {
        return this.http.get(this.baseUrl + "usuario/" + idUsuario, httpOptions).pipe();
    }
}