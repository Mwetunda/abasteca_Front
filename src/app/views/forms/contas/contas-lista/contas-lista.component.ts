import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariDto } from 'app/shared/models/usuario/usuario';
import { UsuarioService } from 'app/shared/services/api/usuario.service';

@Component({
  selector: 'app-contas-lista',
  templateUrl: './contas-lista.component.html',
  styleUrls: ['./contas-lista.component.scss']
})
export class ContasListaComponent implements OnInit {
  filtroForm: FormGroup;
  mostrarFiltros = true;
  progressBar: boolean = false;
  users: UsuariDto[] = []

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.filtroForm = this.initForms();

    this.getusuarios();
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

  getusuarios() {

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
}
