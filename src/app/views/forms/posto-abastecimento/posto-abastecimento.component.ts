import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostoAbastecimentoDto } from 'app/shared/models/postoAbastecimento/posto-abastecimento';
import { PostoAbastecimentoService } from 'app/shared/services/api/postoAbastecimentoService';
import { number } from 'echarts';

@Component({
  selector: 'app-posto-abastecimento',
  templateUrl: './posto-abastecimento.component.html',
  styleUrls: ['./posto-abastecimento.component.scss']
})
export class PostoAbastecimentoComponent implements OnInit {
  mostrarFiltros = true;
  filtroForm: FormGroup;
  selected = [];
  progressBar: boolean = false;
  postos: PostoAbastecimentoDto[] = [];
  estados: any[] = [{ id: 1, estado: "Activo" }, { id: 2, estado: "Inactivo" }];
  postosSelecionados: any[];

  constructor(
    private formBuilder: FormBuilder,
    private postoAbastecimentoService: PostoAbastecimentoService,
  ) {

  }

  ngOnInit(): void {
    this.filtroForm = this.initForms();
    this.getPostosAbastecimento();
  }

  initForms(): any {

    return this.formBuilder.group({
      idEstado: [],
      codigo: [''],
      nome: [''],
      NIF: [''],
      email: [''],
    });
  }

  getPostosAbastecimento() {

    const filtro: any = {
      distancia: 200,
      latitude: -8.822956196237396,
      longitude: 13.242132926984917
    }

    this.progressBar = true;
    this.postoAbastecimentoService.getPostosAbastecimento(filtro).subscribe((res) => {
      this.postos = res.objecto;
      this.progressBar = false;
      console.log("Postos:", this.postos)
    },
      (error) => {
        this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  async aoSelecionar(evento: any) {
    this.postosSelecionados = await evento.selected;
  }

  exportarParaExcel() {

  }

  filtrarPostos() {

  }

  limparFiltro() {

  }

  removerPosto() {

  }

}
