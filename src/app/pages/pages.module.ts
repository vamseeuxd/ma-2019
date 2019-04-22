import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PageRoutingModule} from './page-routing.module';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {
  AccordionModule,
  AlertModule, BsDropdownModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  DatepickerModule, ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    LandingPageComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  exports: [
    LandingPageComponent
  ]
})
export class PagesModule {
}
