import { Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { WizardComponent } from './wizard/wizard.component';
import { PostoAbastecimentoComponent } from './posto-abastecimento/posto-abastecimento.component';
import { OperadoraListaComponent } from './operadoras/operadora-lista/operadora-lista.component';
import { CombustiveisListaComponent } from './combustiveis/combustiveis-lista/combustiveis-lista.component';
import { LocaisListaComponent } from './locais/locais-lista/locais-lista.component';
import { ContasListaComponent } from './contas/contas-lista/contas-lista.component';
import { UtilizadoresListaComponent } from './utilizadores/utilizadores-lista/utilizadores-lista.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicFormComponent,
        data: { title: 'Basic', breadcrumb: 'BASIC' }
      },
      {
        path: 'editor',
        component: RichTextEditorComponent,
        data: { title: 'Editor', breadcrumb: 'EDITOR' }
      }, 
      {
        path: 'upload',
        component: FileUploadComponent,
        data: { title: 'Upload', breadcrumb: 'UPLOAD' }
      }, 
      {
        path: 'wizard',
        component: WizardComponent,
        data: { title: 'Wizard', breadcrumb: 'WIZARD' }
      },


      {
        path: 'contas',
        component: ContasListaComponent,
        data: { title: 'Contas', breadcrumb: '' }
      },
      {
        path: 'postos',
        component: PostoAbastecimentoComponent,
        data: { title: 'Postos', breadcrumb: '' }
      },
      {
        path: 'operadores',
        component: UtilizadoresListaComponent,
        data: { title: 'Operadores', breadcrumb: '' }
      }, 
      {
        path: 'configuracoes/operadoras',
        component: OperadoraListaComponent,
        data: { title: 'Operadoras', breadcrumb: '' }
      },
      {
        path: 'configuracoes/combustiveis',
        component: CombustiveisListaComponent,
        data: { title: 'Combustiveis', breadcrumb: '' }
      },
      {
        path: 'configuracoes/locais',
        component: LocaisListaComponent,
        data: { title: 'Locais', breadcrumb: '' }
      },
    ]
  }
];