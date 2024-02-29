import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioDto } from 'app/shared/models/usuario/usuario';
import { UsuarioService } from 'app/shared/services/api/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-utilizadores-detalhe',
  templateUrl: './utilizadores-detalhe.component.html',
  styleUrls: ['./utilizadores-detalhe.component.scss']
})
export class UtilizadoresDetalheComponent implements OnInit {

  subscriptions: Subscription[] = [];
  operadorForm: FormGroup;
  modoEdicao = false;
  titulo: string = "";
  panelOpenState = false;
  typeField = false;
  imgUrl = 'assets/images/svg-icons/ad';
  imgInvalida = '';
  imgFicheiro: any;
  imgNome: string;
  operador: UsuarioDto;
  progressbar: boolean = false
  registo: number = 0;

  constructor(
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<UtilizadoresDetalheComponent>,
    private fb: FormBuilder,
    //private niticacao: NotificacaoService
  ) {
    this.modoEdicao = this.data.accao === 'D' ? false : true;

    this.titulo = this.data.titulo

    this.inicioFormulario(this.data.operador)
  }

  ngOnInit() {

  }

  inicioFormulario(operador?: UsuarioDto) {
    this.operadorForm = this.fb.group({
      idUsuario:[operador && operador?.idUsuario ? operador?.idUsuario : 0],
      userName:[operador && operador?.userName ? operador?.userName : "", Validators.required],
      passWord:[operador && operador?.passWord ? operador?.passWord : "", this.data?.accao == 'C' ? Validators.required : Validators.nullValidator],
      idPerfil:[operador && operador?.idPerfil ? operador?.idPerfil : 0, Validators.required],
      nome:[operador && operador?.nome ? operador?.nome : "", Validators.required],
      email:[operador && operador?.email ? operador?.email : ""],
      telefone:[operador && operador?.telefone ? operador?.telefone : ""],
      idProvinciaResidencia:[operador && operador?.idProvinciaResidencia ? operador?.idProvinciaResidencia : 0],
      estado:[operador && operador?.estado ? operador?.estado : false],
    });
  }

  salvarOperador(): void {

    if(!this.operadorForm.valid){
      //Preencha os campos obrigatórios
      console.log("Validar")
      return
    }

    this.registo++;

    this.progressbar = true;
    this.usuarioService.SalvarUsuarios(this.operadorForm.value).subscribe((res) => {
      this.progressbar = false;
      //mensagem
    },
      (error) => {
        //this.alertService.notificar(error?.error?.mensagem, false, 5000);
        this.progressbar = false
      }
    );

    if(this.data?.accao == 'E'){
      this.dialog.close(this.registo);
    }
    
    this.resetOperadorForm();
  }

  resetOperadorForm(): void {
    this.operadorForm.reset({

    });
  }

  previsualizar(event) {
    this.imgFicheiro = (event.target as HTMLInputElement).files[0];
    if (this.imgFicheiro.size > 1048576) {
      this.imgInvalida = 'O limite máximo permitido para a imagem é 1MB';
      return false;
    }
    this.imgInvalida = '';
    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    };

    reader.readAsDataURL(this.imgFicheiro);
    this.imgNome = this.imgFicheiro.name;
  }

  changeTypeField() {
    return (this.typeField = !this.typeField);
  }

  ngOnDestroy() {
  }

  fecharModal() {
    this.dialog.close(this.registo);
  }
}
