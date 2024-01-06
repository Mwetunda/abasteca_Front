import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DistritoDto } from 'app/shared/models/locais/distrito';
import { MunicipioDto } from 'app/shared/models/locais/municipio';
import { ProvinciaDto } from 'app/shared/models/locais/provincia';
import { LocaisSevice } from 'app/shared/services/api/locais.service';

@Component({
  selector: 'app-locais-lista',
  templateUrl: './locais-lista.component.html',
  styleUrls: ['./locais-lista.component.scss']
})
export class LocaisListaComponent implements OnInit {
  mostrarFiltros = true;
  filtroMunicipiosForm: FormGroup;
  filtroDistritosForm: FormGroup;
  selectedProvincias = [];
  selectedMunicipios = [];
  selectedDistritos = [];
  progressBar: boolean = false;
  provincias: ProvinciaDto [] = [];
  municipios: MunicipioDto [] = [];
  distritos: DistritoDto [] = [];

  constructor(
    private locaisService:LocaisSevice,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.filtroMunicipiosForm = this.initFormMunicipioFiltros();
    this.filtroDistritosForm = this.initFormDistritoFiltros();

    this.getProvincias();
    this.getMunicipios();
    this.getDistritos();
  }

  initFormMunicipioFiltros(): any {

    return this.formBuilder.group({
      designacao1:[''],
      idProvincia1: [],
    });
  }

  initFormDistritoFiltros(): any {

    return this.formBuilder.group({
      designacao:[''],
      idProvincia: [],
      idMunicipio: [],
    });
  }

  getProvincias() {
    this.progressBar = true;
    this.locaisService.getProvincias().subscribe((res) => {
      this.provincias = res.objecto;
      this.progressBar = false;
    },
      (error) => {
        this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getMunicipios() {
    //this.progressBar = true;
    this.locaisService.getMunicipios().subscribe((res) => {
      this.municipios = res.objecto;
      //this.progressBar = false;
    },
      (error) => {
        //this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getDistritos() {
    //this.progressBar = true;
    this.locaisService.getDistritos().subscribe((res) => {
      this.distritos = res.objecto;
      //this.progressBar = false;
    },
      (error) => {
        //this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  exportarProvinciasParaExcel(){

  }

  exportarMunicipiossParaExcel(){

  }

  exportarDistritosParaExcel(){

  }

  async aoSelecionarProvincia(evento: any) {
    this.selectedProvincias = await evento.selected;
  }

  async aoSelecionarMunicipio(evento: any) {
    this.selectedMunicipios = await evento.selected;
  }

  async aoSelecionarDistrito(evento: any) {
    this.selectedDistritos = await evento.selected;
  }

  removerProvincia(){

  }
}
