import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDto } from 'app/shared/models/usuario/usuario';
import { UsuarioService } from 'app/shared/services/api/usuario.service';
import { Subscription } from 'rxjs';
import { UtilizadoresDetalheComponent } from '../utilizadores-detalhe/utilizadores-detalhe.component';
import { PerfilDto } from 'app/shared/models/perfil/perfil';
import { ProvinciaDto } from 'app/shared/models/locais/provincia';
import { LocaisSevice } from 'app/shared/services/api/locais.service';

@Component({
  selector: 'app-utilizadores-lista',
  templateUrl: './utilizadores-lista.component.html',
  styleUrls: ['./utilizadores-lista.component.scss']
})
export class UtilizadoresListaComponent implements OnInit {

  mostrarFiltros = true;
  filtroForm: FormGroup;
  selected = [];
  progressBar: boolean = false;
  operadores: UsuarioDto[] = [];
  perfils: PerfilDto[] = [];
  subscricoes: Subscription[] = [];
  provincias: ProvinciaDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private modal: MatDialog,
    private locaisSevice: LocaisSevice,
  ) {

  }

  ngOnInit(): void {
    this.filtroForm = this.initForms();
    this.getPerfils();
    this.getOperadores();
    this.getProvincias();
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

  getOperadores() {

    const filtro: any = {
      distancia: 200,
      latitude: -8.822956196237396,
      longitude: 13.242132926984917
    }

    this.progressBar = true;
    this.usuarioService.getOperadores(filtro).subscribe((res) => {
      this.operadores = res.objecto;
      this.progressBar = false;
    },
      (error) => {
        this.progressBar = false;
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
      }
    );
  }

  getPerfils() {
    this.usuarioService.getPerfils().subscribe((res) => {
      this.perfils = res.objecto;
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

  abrirModalOperador(operador: UsuarioDto, accao: string): void {

    const modalRef = this.modal.open(UtilizadoresDetalheComponent, {
      width: '68%',
      height: '80%',
      disableClose: true,
      data: {
        operador,
        perfils: this.perfils,
        provincias: this.provincias,
        accao,
        codPerfil: 2,
        titulo: accao === 'C' ? "Adicionar operador" : accao === 'E' ? "Editar operador" : "Consultar operador"
      },
    });

    this.subscricoes.push(
      modalRef.afterClosed().subscribe((registo) => {
        console.log("Reg: ", registo);
        if(registo > 0){
          this.getOperadores();
        }
      })
    );
  }

  async aoSelecionar(evento: any) {
    this.selected = await evento.selected;
  }

  exportarParaExcel() {

  }
}
