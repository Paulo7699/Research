import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPageComponent } from './pages/analytics/analytics-page/analytics-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailLaboratoriesPageComponent } from './pages/laboratories/detail-laboratories-page/detail-laboratories-page/detail-laboratories-page.component';
import { LaboratoriesComponent } from './pages/laboratories/laboratories/laboratories.component';
import { LoginComponent } from './pages/login/login.component';
import { AnalysisPartnerComponent } from './pages/PARTNERS-SECTION/analysis-partner/analysis-partner.component';
import { CompleteEntryComponent } from './pages/PARTNERS-SECTION/entries/complete-entry/complete-entry.component';
import { CompletedEntriesComponent } from './pages/PARTNERS-SECTION/entries/completed-entries/completed-entries.component';
import { NewEntryComponent } from './pages/PARTNERS-SECTION/entries/new-entry/new-entry.component';
import { OptionEntriesComponent } from './pages/PARTNERS-SECTION/entries/option-entries/option-entries.component';
import { HomePartnerComponent } from './pages/PARTNERS-SECTION/home-partner/home-partner.component';
import { AssociatedProductsComponent } from './pages/partners/associated-products/associated-products/associated-products.component';
import { DetailsPartnersPageComponent } from './pages/partners/details-partners-page/details-partners-page.component';
import { PartnersPageComponent } from './pages/partners/partners-page/partners-page.component';
import { DetailProductsPageComponent } from './pages/products/detail-products-page/detail-products-page.component';
import { DetailSpecificationCaracComponent } from './pages/products/detail-specification-carac/detail-specification-carac.component';
import { ProductsPageComponent } from './pages/products/products-page/products-page.component';
import { TeamPageComponent } from './pages/team/team-page/team-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { GuardDevLoginService } from './services/guards/dev-login/guard-dev-login.service';
import { GuardPartnerLoginService } from './services/guards/partner-login/guard-partner-login.service';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    canActivate : [GuardDevLoginService]
  },
  {
    path:'products',
    component:ProductsPageComponent,
  },
  {
    path:'detail-product/:id',
    component:DetailProductsPageComponent,
  },
  {
    path:'associated-products/:id',
    component:AssociatedProductsComponent,
  },
  {
    path:'detail-partner/:id',
    component:DetailsPartnersPageComponent,
  },
  {
    path:'detail-laboratory/:id',
    component:DetailLaboratoriesPageComponent,
  },
  {
    path:'specifications/:id',
    component:DetailSpecificationCaracComponent,
  },
  {
    path:'laboratories',
    component:LaboratoriesComponent,
  },
  {
    path:'partners',
    component:PartnersPageComponent,
  },
  {
    path:'team',
    component:TeamPageComponent,
  },
  {
    path:'analytics',
    component:AnalyticsPageComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },{
    path:'home-partner',
    redirectTo: 'entries'
  },
  {
    path:'analysis-partner',
    component:AnalysisPartnerComponent,
  },
  {
    path:'entries',
    component:OptionEntriesComponent,
    canActivate : [GuardPartnerLoginService]
  },
  {
    path:'new-entry',
    component:NewEntryComponent,
  },
  {
    path:'complete-entry',
    component:CompleteEntryComponent,
  },
  {
    path:'completed-entries',
    component:CompletedEntriesComponent,
  },
  {
    path:'test',
    component:TestPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
