import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "ng2-translate";
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    FlyingHeroesPipe
  ],
  declarations: [FlyingHeroesPipe]
})
export class SharedModule { }
