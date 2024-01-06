import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
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
export class LocaisSevice {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiURL}`;
    }

    getProvincias(): Observable<any> {
        return this.http.get(this.baseUrl + "provincia/lista/", httpOptions).pipe();
    }

    getProvincia(idProvincia : number): Observable<any> {
        return this.http.get(this.baseUrl + "provincia/" + idProvincia, httpOptions).pipe();
    }

    getMunicipios(): Observable<any> {
        return this.http.get(this.baseUrl + "municipio/lista/", httpOptions).pipe();
    }

    getMunicipiosPorProvincia(idProvincia : number): Observable<any> {
        return this.http.get(this.baseUrl + "municipio/" + idProvincia+"/lista", httpOptions).pipe();
    }

    getMunicipio(idMunicipio : number): Observable<any> {
        return this.http.get(this.baseUrl + "municipio/" + idMunicipio, httpOptions).pipe();
    }

    getDistritos(): Observable<any> {
        return this.http.get(this.baseUrl + "distrito/lista/", httpOptions).pipe();
    }

    getDistritosPorMunicipio(idMunicipio : number): Observable<any> {
        return this.http.get(this.baseUrl + "distrito/" + idMunicipio+"/lista", httpOptions).pipe();
    }

    getDistrito(idDistrito : number): Observable<any> {
        return this.http.get(this.baseUrl + "distrito/" + idDistrito, httpOptions).pipe();
    }
}