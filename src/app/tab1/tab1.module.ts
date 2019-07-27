import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { SliderComponent } from "../components/slider/slider.component";
import { AvailablenowComponent } from "../components/availablenow/availablenow.component";
import { BannerComponent } from "../components/banner/banner.component";
import { BannerToolbarComponent } from "../components/banner-toolbar/banner-toolbar.component";
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    SliderComponent,
    AvailablenowComponent,
    BannerComponent,
    BannerToolbarComponent,
    NavbarComponent
  ]
})
export class Tab1PageModule {}
