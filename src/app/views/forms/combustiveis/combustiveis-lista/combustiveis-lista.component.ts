import { Component, OnInit } from '@angular/core';
import { CombustivelDto } from 'app/shared/models/combustivel/combustivel';
import { CombustivelService } from 'app/shared/services/api/combustivel.service';

@Component({
  selector: 'app-combustiveis-lista',
  templateUrl: './combustiveis-lista.component.html',
  styleUrls: ['./combustiveis-lista.component.scss']
})
export class CombustiveisListaComponent implements OnInit {
  selected = [];
  progressBar: boolean = false;
  combustiveis: CombustivelDto[] = [];

  constructor(
    private combustivelService : CombustivelService,
    ) { }

  ngOnInit(): void {
    this.getCombustiveis()
  }

  getCombustiveis() {
    this.progressBar = true;
    this.combustivelService.getCombustiveis().subscribe((res) => {
      this.combustiveis = res.objecto;
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
