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
export class PostoAbastecimentoService {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiURL}`;
    }

    getPostosAbastecimento(modelo: any): Observable<any> {
        return this.http.post(this.baseUrl + "postoAbastecimento/lista/", modelo, httpOptions).pipe();
    }

    getPostoAbastecimento(idPostoAbastecimento: number): Observable<any> {
        return this.http.post(this.baseUrl + "postoAbastecimento/" + idPostoAbastecimento, httpOptions).pipe();
    }
}