import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelativeTimePipe } from './relative-time.pipe';
import { ExcerptPipe } from "./excerpt.pipe";
import { GetValueByKeyPipe } from './get-value-by-key.pipe';
import { SafePipe } from './safe.pipe';

const pipes = [
  RelativeTimePipe,
  ExcerptPipe,
  GetValueByKeyPipe,
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    pipes,
    SafePipe
  ],
  exports: [
    pipes,
    SafePipe
  ],
})
export class SharedPipesModule {}