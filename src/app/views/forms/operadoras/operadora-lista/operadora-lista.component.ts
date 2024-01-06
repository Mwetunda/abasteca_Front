import { Component, OnInit } from '@angular/core';
import { OperadoraDto } from 'app/shared/models/operadora/operadora';
import { OperadoraService } from 'app/shared/services/api/operadora.service';

@Component({
  selector: 'app-operadora-lista',
  templateUrl: './operadora-lista.component.html',
  styleUrls: ['./operadora-lista.component.scss']
})
export class OperadoraListaComponent implements OnInit {
  selected = [];
  progressBar: boolean = false;
  operadoras: OperadoraDto[] = [];

  constructor(
    private operadoraService : OperadoraService,
    ) { }

  ngOnInit(): void {
    this.getOperadoras()
  }

  getOperadoras() {
    this.progressBar = true;
    this.operadoraService.getOperadoras().subscribe((res) => {
      this.operadoras = res.objecto;
      this.progressBar = false;
    },
      (error) => {
        this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }


  exportarParaExcel(){

  }

  async aoSelecionar(evento: any) {
    this.selected = await evento.selected;
  }

  remover(){

  }
}
