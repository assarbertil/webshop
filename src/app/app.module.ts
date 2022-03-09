import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { MovieGridComponent } from "./components/movie-grid/movie-grid.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { MovieComponent } from "./components/movie/movie.component";
import { CheckoutComponent } from "./routes/checkout/checkout.component";
import { HomeComponent } from "./routes/home/home.component";
import { AdminComponent } from "./routes/admin/admin.component";
import { ClickStopPropagationDirective } from "./directives/click-stop-propagation.directive";
import { CheckoutFormComponent } from "./components/checkout-form/checkout-form.component";
import { SuccessComponent } from "./routes/success/success.component";

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
    CheckoutFormComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
