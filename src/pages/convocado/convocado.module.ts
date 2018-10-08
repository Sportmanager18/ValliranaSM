import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvocadoPage } from './convocado';

@NgModule({
  declarations: [
    ConvocadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvocadoPage),
  ],
})
export class ConvocadoPageModule {}
