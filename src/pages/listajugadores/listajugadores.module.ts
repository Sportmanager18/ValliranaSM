import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListajugadoresPage } from './listajugadores';

@NgModule({
  declarations: [
    ListajugadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListajugadoresPage),
  ],
})
export class ListajugadoresPageModule {}
