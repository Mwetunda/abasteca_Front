import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DistritoDto } from 'app/shared/models/locais/distrito';
import { MunicipioDto } from 'app/shared/models/locais/municipio';
import { ProvinciaDto } from 'app/shared/models/locais/provincia';
import { OperadoraDto } from 'app/shared/models/operadora/operadora';
import { PostoAbastecimentoDto } from 'app/shared/models/posto-abastecimento/posto-abastecimento';
import { LocaisSevice } from 'app/shared/services/api/locais.service';
import { OperadoraService } from 'app/shared/services/api/operadora.service';
import { PostoAbastecimentoService } from 'app/shared/services/api/posto-abastecimento.service';
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
  operadoras: OperadoraDto[] = [];
  provincias: ProvinciaDto[] = [];
  municipios: MunicipioDto[] = [];
  distritos: DistritoDto[] = [];
  estados: any[] = [{ id: 1, estado: "Activo" }, { id: 2, estado: "Inactivo" }];
  postosSelecionados: any[];

  constructor(
    private formBuilder: FormBuilder,
    private postoAbastecimentoService: PostoAbastecimentoService,
    private operadoraService: OperadoraService,
    private locaisSevice: LocaisSevice,
  ) {

  }

  ngOnInit(): void {
    this.filtroForm = this.initForms();
    this.getPostosAbastecimento();
    this.getOperadoras();
    this.getProvincias();
    this.getMunicipios();
    this.getDistritos();

  }

  initForms(): any {

    return this.formBuilder.group({
      designacao: [''],
      idOperadora: [],
      endereco: [''],
      idProvincia: [],
      idMunicipio: [],
      idDistrito: [],
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
    },
      (error) => {
        this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getOperadoras() {

    this.operadoraService.getOperadoras().subscribe((res) => {
      this.operadoras = res.objecto;
    },
      (error) => {
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getProvincias() {

    this.locaisSevice.getProvincias().subscribe((res) => {
      this.provincias = res.objecto;
    },
      (error) => {
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getMunicipios() {

    this.locaisSevice.getMunicipios().subscribe((res) => {
      this.municipios = res.objecto;
    },
      (error) => {
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getDistritos() {

    this.locaisSevice.getDistritos().subscribe((res) => {
      this.distritos = res.objecto;
    },
      (error) => {
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
