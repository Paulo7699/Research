import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './reusable-components/group-components/nav-bar/nav-bar.component';
import { LogoComponent } from './reusable-components/unit-components/logo/logo.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TitlePanelsComponent } from './reusable-components/unit-components/title-panels/title-panels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './reusable-components/group-components/top-bar/top-bar.component';
import { ToggleDarkLightComponent } from './reusable-components/unit-components/toggle-dark-light/toggle-dark-light.component';
import { WelcomeUserComponent } from './reusable-components/unit-components/welcome-user/welcome-user.component';
import { MainDashboardComponent } from './reusable-components/main-contents/main-dashboard/main-dashboard.component';
import { TitlePartMainComponent } from './reusable-components/unit-components/title-part-main/title-part-main.component';
import { NumberCardsComponent } from './reusable-components/unit-components/cards/number-cards/number-cards.component';
import { TableAnalysisComponent } from './reusable-components/unit-components/table-analysis/table-analysis.component';
import { ProductsPageComponent } from './pages/products/products-page/products-page.component';
import { MainProductsComponent } from './reusable-components/main-contents/main-products/main-products/main-products.component';
import { CardsSelectableComponent } from './reusable-components/unit-components/cards-selectable/cards-selectable.component';
import { FormProductsComponent } from './reusable-components/unit-components/form-products/form-products.component';
import { ActionSelectedComponent } from './reusable-components/unit-components/action-selected/action-selected.component';
import { LaboratoriesComponent } from './pages/laboratories/laboratories/laboratories.component';
import { MainLaboratoriesComponent } from './reusable-components/main-contents/main-laboratories/main-laboratories.component';
import { ErrorsComponent } from './reusable-components/unit-components/errors/errors.component';
import { PartnersPageComponent } from './pages/partners/partners-page/partners-page.component';
import { MainPartnersComponent } from './reusable-components/main-contents/main-partners/main-partners.component';
import { TeamPageComponent } from './pages/team/team-page/team-page.component';
import { MainTeamComponent } from './reusable-components/main-contents/main-team/main-team.component';
import { FormTeamComponent } from './reusable-components/unit-components/form-team/form-team.component';
import { DetailProductsPageComponent } from './pages/products/detail-products-page/detail-products-page.component';
import { BackComponent } from './reusable-components/unit-components/back/back.component';
import { TopDetailsBarComponent } from './reusable-components/group-components/top-details-bar/top-details-bar.component';
import { MainDetailProductsComponent } from './reusable-components/main-contents/main-detail-products/main-detail-products/main-detail-products.component';
import { ActionTeamSelectedComponent } from './reusable-components/unit-components/action-team-selected/action-team-selected.component';
import { DetailsPartnersPageComponent } from './pages/partners/details-partners-page/details-partners-page.component';
import { MainDetailPartnerComponent } from './reusable-components/main-contents/main-detail-partner/main-detail-partner.component';
import { FormAccountPartnerComponent } from './reusable-components/unit-components/form-account-partner/form-account-partner.component';
import { DetailLaboratoriesPageComponent } from './pages/laboratories/detail-laboratories-page/detail-laboratories-page/detail-laboratories-page.component';
import { MainDetailLaboratoriesComponent } from './reusable-components/main-contents/main-detail-laboratories/main-detail-laboratories.component';
import { ActionPartnerSelectedComponent } from './reusable-components/unit-components/action-partner-selected/action-partner-selected.component';
import { AssociatedProductsComponent } from './pages/partners/associated-products/associated-products/associated-products.component';
import { MainDetailAssociatedProductsComponent } from './reusable-components/main-contents/main-detail-associated-products/main-detail-associated-products.component';
import { ActionDetailProductSelectedComponent } from './reusable-components/unit-components/action-detail-product-selected/action-detail-product-selected.component';
import { DetailSpecificationCaracComponent } from './pages/products/detail-specification-carac/detail-specification-carac.component';
import { MainSpecificationComponent } from './reusable-components/main-contents/main-specification/main-specification.component';
import { CardsSpecificationComponent } from './reusable-components/unit-components/cards-specification/cards-specification.component';
import { AnalyticsPageComponent } from './pages/analytics/analytics-page/analytics-page.component';
import { MainAnalyticsComponent } from './reusable-components/main-contents/main-analytics/main-analytics.component';
import { ChartMonitorComponent } from './reusable-components/unit-components/chart-monitor/chart-monitor.component';
import { CardsMonitorPartnerComponent } from './reusable-components/unit-components/cards-monitor-partner/cards-monitor-partner.component';
import { LoginComponent } from './pages/login/login.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAnimationComponent } from './reusable-components/unit-components/dialog-animation/dialog-animation.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { LogoutComponent } from './reusable-components/unit-components/logout/logout.component';
import { HomePartnerComponent } from './pages/PARTNERS-SECTION/home-partner/home-partner.component';
import { NavBarPartnerComponent } from './reusable-components/group-components/nav-bar-partner/nav-bar-partner.component';
import { TeamPartnerComponent } from './pages/PARTNERS-SECTION/team-partner/team-partner.component';
import { AnalysisPartnerComponent } from './pages/PARTNERS-SECTION/analysis-partner/analysis-partner.component';
import { NewEntryComponent } from './pages/PARTNERS-SECTION/entries/new-entry/new-entry.component';
import { CompleteEntryComponent } from './pages/PARTNERS-SECTION/entries/complete-entry/complete-entry.component';
import { OptionEntriesComponent } from './pages/PARTNERS-SECTION/entries/option-entries/option-entries.component';
import { MainOptionEntriesComponent } from './reusable-components/main-contents/entries/main-option-entries/main-option-entries.component';
import { MainAddEntryComponent } from './reusable-components/main-contents/entries/main-add-entry/main-add-entry.component';
import { MainCompleteEntryComponent } from './reusable-components/main-contents/entries/main-complete-entry/main-complete-entry.component';
import { MainCompletedEntriesComponent } from './reusable-components/main-contents/entries/main-completed-entries/main-completed-entries.component';
import { CompletedEntriesComponent } from './pages/PARTNERS-SECTION/entries/completed-entries/completed-entries.component';
import { TableEntriesComponent } from './reusable-components/unit-components/table-entries/table-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent,
    HomePageComponent,
    TitlePanelsComponent,
    TopBarComponent,
    ToggleDarkLightComponent,
    WelcomeUserComponent,
    MainDashboardComponent,
    TitlePartMainComponent,
    NumberCardsComponent,
    TableAnalysisComponent,
    ProductsPageComponent,
    MainProductsComponent,
    CardsSelectableComponent,
    FormProductsComponent,
    ActionSelectedComponent,
    LaboratoriesComponent,
    MainLaboratoriesComponent,
    ErrorsComponent,
    PartnersPageComponent,
    MainPartnersComponent,
    TeamPageComponent,
    MainTeamComponent,
    FormTeamComponent,
    DetailProductsPageComponent,
    BackComponent,
    TopDetailsBarComponent,
    MainDetailProductsComponent,
    ActionTeamSelectedComponent,
    DetailsPartnersPageComponent,
    MainDetailPartnerComponent,
    FormAccountPartnerComponent,
    DetailLaboratoriesPageComponent,
    MainDetailLaboratoriesComponent,
    ActionPartnerSelectedComponent,
    AssociatedProductsComponent,
    MainDetailAssociatedProductsComponent,
    ActionDetailProductSelectedComponent,
    DetailSpecificationCaracComponent,
    MainSpecificationComponent,
    CardsSpecificationComponent,
    AnalyticsPageComponent,
    MainAnalyticsComponent,
    ChartMonitorComponent,
    CardsMonitorPartnerComponent,
    LoginComponent,
    SplashScreenComponent,
    DialogAnimationComponent,
    TestPageComponent,
    LogoutComponent,
    HomePartnerComponent,
    NavBarPartnerComponent,
    TeamPartnerComponent,
    AnalysisPartnerComponent,
    NewEntryComponent,
    CompleteEntryComponent,
    OptionEntriesComponent,
    MainOptionEntriesComponent,
    MainAddEntryComponent,
    MainCompleteEntryComponent,
    MainCompletedEntriesComponent,
    CompletedEntriesComponent,
    TableEntriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
