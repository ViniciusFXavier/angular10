import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    MatToolbarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
