import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProvinciaDto } from 'app/shared/models/locais/provincia';
import { PerfilDto } from 'app/shared/models/perfil/perfil';
import { UsuarioDto } from 'app/shared/models/usuario/usuario';
import { LocaisSevice } from 'app/shared/services/api/locais.service';
import { UsuarioService } from 'app/shared/services/api/usuario.service';
import { Subscription } from 'rxjs';
import { UtilizadoresDetalheComponent } from '../../utilizadores/utilizadores-detalhe/utilizadores-detalhe.component';

@Component({
  selector: 'app-contas-lista',
  templateUrl: './contas-lista.component.html',
  styleUrls: ['./contas-lista.component.scss']
})
export class ContasListaComponent implements OnInit {
  filtroForm: FormGroup;
  mostrarFiltros = true;
  progressBar: boolean = false;
  users: UsuarioDto[] = []
  perfils: PerfilDto[] = [];
  subscricoes: Subscription[] = [];
  provincias: ProvinciaDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private modal: MatDialog,
    private locaisSevice: LocaisSevice,
    ) { }

  ngOnInit(): void {
    this.filtroForm = this.initForms();
    this.getUsuarios();
    this.getPerfils();
    this.getProvincias();
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

  getUsuarios() {

    const filtro: any = {
    }

    this.progressBar = true;
    this.usuarioService.getUsuarios(filtro).subscribe((res) => {
      this.users = res.objecto;
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
        codPerfil: 1,
        titulo: accao === 'C' ? "Adicionar usuário" : accao === 'E' ? "Editar usuário" : "Consultar usuário"
      },
    });

    this.subscricoes.push(
      modalRef.afterClosed().subscribe((registo) => {
        if(registo > 0){
          this.getUsuarios();
        }
      })
    );
  }
}
