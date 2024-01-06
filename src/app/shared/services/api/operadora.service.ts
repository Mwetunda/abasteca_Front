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
export class OperadoraService {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiURL}`;
    }

    getOperadoras(): Observable<any> {
        return this.http.get(this.baseUrl + "operadora/lista/", httpOptions).pipe();
    }

    getOperadora(idOperadora: number): Observable<any> {
        return this.http.get(this.baseUrl + "operadora/" + idOperadora, httpOptions).pipe();
    }
}