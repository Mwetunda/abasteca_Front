import { Injectable } from "@angular/core";
import { LocaisSevice } from "../api/locais.service";

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    baseUrl: string;

    constructor(private locaisSevice: LocaisSevice) {

    }

    getProvincias() : any {
        this.locaisSevice.getProvincias().subscribe((res) => {
            return  res.objecto;
        },
            (error) => {
                //this.alertService.notificar(error?.error?.mensagem, false, 5000);
            }
        );
    }
}