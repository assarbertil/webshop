import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { MovieGridComponent } from "./components/movies/movie-grid.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { MovieComponent } from "./components/movie/movie.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { HomeComponent } from "./routes/home/home.component";
import { AdminComponent } from "./routes/admin/admin.component";
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieGridComponent,
    LayoutComponent,
    HeaderComponent,
    MovieComponent,
    CheckoutComponent,
    HomeComponent,
    AdminComponent,
    ClickStopPropagationDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
