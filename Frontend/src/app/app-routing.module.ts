import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {AreaComponent} from './shared/widgets/area/area.component';
import {DemandeDetailComponent} from './modules/demande-detail/demande-detail.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {ConsulteDComponent} from './admin/consulte-d/consulte-d.component';
import {DetailsComponent} from './admin/details/details.component';
import {ArchiveDAComponent} from './admin/archive-da/archive-da.component';
import {RHComponent} from "./rh/rh.component";
import {ListeDemandeComponent} from "./rh/liste-demande/liste-demande.component";
import {CreerOffreComponent} from "./rh/creer-offre/creer-offre.component";
import {ListeOffreComponent} from "./rh/liste-offre/liste-offre.component";
import {DetailOffreComponent} from "./rh/liste-offre/detail-offre/detail-offre.component";
import {OffreComponent} from "./offre/offre.component";
import {PostulationComponent} from "./postulation/postulation.component";
import {UploadComponent} from "./upload/upload.component";
import {CandidatureComponent} from "./rh/candidature/candidature.component";
import {DetailcandidatureComponent} from "./rh/detailcandidature/detailcandidature.component";
import {CandidatComponent} from "./candidat/candidat.component";


const routes: Routes = [
  {path: 'RO' ,
  component: DefaultComponent,
  children: [{path : '', component: DashboardComponent},
             {path : 'posts', component: PostsComponent},
              {path : 'area', component: AreaComponent} ,
    {path : 'detail/:id', component: DemandeDetailComponent}]

  }, {
    path: '',
    component: LoginComponent,
  } ,  {path: 'admin' ,
    component:  AdminComponent,
    children: [{path : 'consulteA', component: ConsulteDComponent},
      {path : 'detail/:id', component: DetailsComponent },
      {path : 'ArchiveAD', component: ArchiveDAComponent }]


  }

  ,  {path: 'RH' ,
    component:  RHComponent,
    children: [{path : 'ListD', component: ListeDemandeComponent},
               {path : 'CreationOffre/:id/:mission/:speciality/:experience/:prix', component: CreerOffreComponent},
               {path : 'ListOffre', component: ListeOffreComponent},
               {path : 'DetailOffre/:id', component: DetailOffreComponent},
               {path : 'candidature', component: CandidatureComponent},
               {path : 'Detail/:id', component: DetailcandidatureComponent} ,
               {path: 'vd' , component:  CandidatComponent}

    ]


  } ,

  {path: 'DetailTOoffre/:id' , component:  OffreComponent} ,

  {path: 'Postulation/:id' , component:  PostulationComponent} ,

  {path: 'Cond' , component:  UploadComponent} ,
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
