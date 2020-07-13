import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarModule } from './components/toolbar/toolbar.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { ContentModule } from './components/content/content.module';
import { FooterModule } from './components/footer/footer.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    RouterModule,
    CommonModule,

    ToolbarModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    ContentModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
