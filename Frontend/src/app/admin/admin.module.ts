import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared/shared.module';
import {HeaderComponent} from '../shared/components/header/header.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import { ConsulteDComponent } from './consulte-d/consulte-d.component';
import { DetailsComponent } from './details/details.component';
import { ArchiveDAComponent } from './archive-da/archive-da.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConsulteDComponent,
    DetailsComponent,
    ArchiveDAComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
