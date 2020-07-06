import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarModule } from './components/navbar/navbar.module';
import { ContentModule } from './components/content/content.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    RouterModule,
    CommonModule,

    NavbarModule,
    ContentModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
