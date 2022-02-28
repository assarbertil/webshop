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

@NgModule({
  declarations: [
    AppComponent,
    MovieGridComponent,
    LayoutComponent,
    HeaderComponent,
    MovieComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
