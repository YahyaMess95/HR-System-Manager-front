import
{ BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import { WidgetsComponent } from './shared/widgets/widgets.component';
import { AreaComponent } from './shared/widgets/area/area.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemandeDetailComponent } from './modules/demande-detail/demande-detail.component';



import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { LoginComponent } from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';
import { AdminComponent } from './admin/admin.component';
import { SidebarAdminComponent } from './shared/components/sidebar-admin/sidebar-admin.component';
import {SharedModule} from './shared/shared/shared.module';
import {ConsulteDComponent} from './admin/consulte-d/consulte-d.component';
import {DetailsComponent} from './admin/details/details.component';
import {ArchiveDAComponent} from './admin/archive-da/archive-da.component';
import { RHComponent } from './rh/rh.component';
import { SidebarRhComponent } from './shared/components/sidebar-rh/sidebar-rh.component';
import { ListeDemandeComponent } from './rh/liste-demande/liste-demande.component';

import {CardModule} from "primeng/components/card/card";

import { CreerOffreComponent } from './rh/creer-offre/creer-offre.component';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import {EditorModule} from "primeng/editor";
import {ChipsModule} from "primeng/components/chips/chips";
import { ListeOffreComponent } from './rh/liste-offre/liste-offre.component';
import { DetailOffreComponent } from './rh/liste-offre/detail-offre/detail-offre.component';
import { OffreComponent } from './offre/offre.component';
import { PostulationComponent } from './postulation/postulation.component';
import {GMapModule} from "primeng/components/gmap/gmap";
import {TriStateCheckboxModule} from "primeng/components/tristatecheckbox/tristatecheckbox";
import { UploadComponent } from './upload/upload.component';
import { CandidatureComponent } from './rh/candidature/candidature.component';
import {DataViewModule} from "primeng/components/dataview/dataview";
import {VirtualScrollerModule} from "primeng/components/virtualscroller/virtualscroller";
import { DetailcandidatureComponent } from './rh/detailcandidature/detailcandidature.component';
import autoTable, {jsPDFConstructor} from "jspdf-autotable";
import { CandidatComponent } from './candidat/candidat.component';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    DemandeDetailComponent,
    LoginComponent,
    AdminComponent,
    SidebarAdminComponent,
    ConsulteDComponent,
    DetailsComponent ,
    ArchiveDAComponent,
    RHComponent,
    SidebarRhComponent,
    ListeDemandeComponent,
    CreerOffreComponent,
    ListeOffreComponent,
    DetailOffreComponent,
    OffreComponent,
    PostulationComponent,
    UploadComponent,
    CandidatureComponent,
    DetailcandidatureComponent,
    CandidatComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule ,
    ReactiveFormsModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FlexLayoutModule,
    ChartsModule,
    SharedModule,
    TableModule,
    BrowserAnimationsModule,
    CardModule ,
    ButtonModule,
    ChipsModule,

    CalendarModule,
    SliderModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,

    ToastModule,
    InputTextModule,

    InputTextareaModule,
    ProgressBarModule,
    TooltipModule,
    RadioButtonModule,
    ToolbarModule,
    FileUploadModule,
    TabViewModule,
    RatingModule,

    EditorModule,
    ButtonModule,
    TabViewModule,
    ConfirmDialogModule,
    DialogModule,
    GMapModule,
    TriStateCheckboxModule,
    FormsModule,
    DataViewModule,
    VirtualScrollerModule,
    HttpClientModule ,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
