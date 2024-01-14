//import { Component, Input, OnInit, Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-dash-card-te-total',
  templateUrl: './dash-card-te-total.component.html',
  styleUrls: ['./dash-card-te-total.component.scss']
})
export class DashCardTeTotalComponent {

  @Input() icon: string = '';
  @Input() propKey: string = '';
  @Input() iconBgColor: string = '';
  @Input() codeCard: string = '';
  @Input() listaItem: any[] = [];
  @Input() total: any;
  @Input() isCardTotal: boolean = false;
  @Input() isMoney: boolean = false;
  @Output() aoClicar =  new EventEmitter();
  itemSelecionado: any;
  onItemSelect(item) {
    this.aoClicar.emit(item);
    this.itemSelecionado = item;
  }
}
