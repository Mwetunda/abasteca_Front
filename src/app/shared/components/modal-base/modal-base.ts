import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'modal-base',
    template: `
        <section>
            <!--  Header da modal  -->
            <div class="modal-header relative bg-primary p-1">
                <!-- <span mat-dialog-close="null" class="cursor-pointer btn-close-modal">
                  <mat-icon>close</mat-icon>
                </span> -->
                <div class="bg-blue">
                    <h3 mat-dialog-title color="basic" class="flex-x-btw"> 
                        <span class="text-white">{{tituloModal}}</span>
                    </h3>
                </div>
            </div>
            <mat-progress-bar mode="indeterminate" *ngIf="loading"></mat-progress-bar>
            <mat-divider></mat-divider>
            <!-- Corpo da Modal -->
            <div class="k-form-crud">
                <!-- Se estiver a cpomplicar, copiar codigo base do formulario e colocar no lugar do ng-content -->
                <ng-content></ng-content>
            </div>
            <!-- Area dos botoes das accoes da modal -->
            <div class="sec-accao-modal bg-white" style="z-index: 23">
                <mat-divider></mat-divider>
                <div class="p-1 flex-x-btw">
                    <span *ngIf="!verBtnGravar" fxFlex></span>
                    <button color="primary" mat-dialog-close="null" (click)="cancelar(true)" mat-button class="mx-1 bg-secondary">
                        <mat-icon>close</mat-icon>
                        {{codBotao === 'C' ?
                            'Cancelar' : 'Fechar'}}
                    </button>
                    <span *ngIf="verBtnGravar" fxFlex></span>
                    <button *ngIf="verBtnGravar" color="primary" [disabled]="accao === 'D'" (click)="gravar(true)" mat-button class="mr-1 bg-primary">
                        <mat-icon>save</mat-icon>
                        {{btnGravar ?? 'Gravar'}}
                    </button>
                </div>
            </div>
        </section>
    `
})
export class ModalBaseComponent {
    @Input() tituloModal: string = '';
    @Input() loading: boolean = false;
    @Input() btnCancelar: string = '';
    @Input() btnGravar: string = 'Salvar';
    @Input() verBtnGravar: boolean = true;
    @Input() accao: string = '';
    @Input() codBotao: string = '';
    @Input() codigoAccao: string = '';
    @Output() aoGravar = new EventEmitter();
    @Output() aoCancelar = new EventEmitter();

    constructor() {
    }

    cancelar(valor: any) {
        this.aoCancelar.emit(valor);
    }

    gravar(valor: any) {
        this.aoGravar.emit(valor);
    }

}