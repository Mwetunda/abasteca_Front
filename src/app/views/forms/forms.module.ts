import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


import { FormsRoutes } from './forms.routing';
import { WizardComponent } from './wizard/wizard.component';
import { PostoAbastecimentoComponent } from './posto-abastecimento/posto-abastecimento.component';
import { OperadoraListaComponent } from './operadoras/operadora-lista/operadora-lista.component';
import { OperadoraComponent } from './operadoras/operadora/operadora.component';
import { CombustiveisListaComponent } from './combustiveis/combustiveis-lista/combustiveis-lista.component';
import { CombustiveisComponent } from './combustiveis/combustiveis/combustiveis.component';
import { LocaisListaComponent } from './locais/locais-lista/locais-lista.component';
import { ProvinciaComponent } from './locais/provincia/provincia.component';
import { MunicipioComponent } from './locais/municipio/municipio.component';
import { DistritoComponent } from './locais/distrito/distrito.component';
import { ContasListaComponent } from './contas/contas-lista/contas-lista.component';
import { ContaDetalheComponent } from './contas/conta-detalhe/conta-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    FileUploadModule,
    RouterModule.forChild(FormsRoutes),
    NgxDatatableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [
    RichTextEditorComponent, 
    FileUploadComponent, 
    WizardComponent, 
    BasicFormComponent, 
    PostoAbastecimentoComponent, OperadoraListaComponent, OperadoraComponent, CombustiveisListaComponent, CombustiveisComponent, LocaisListaComponent, ProvinciaComponent, MunicipioComponent, DistritoComponent, ContasListaComponent, ContaDetalheComponent
  ],
})
export class AppFormsModule {}
