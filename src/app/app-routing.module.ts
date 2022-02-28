import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./routes/home/home.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { AdminComponent } from "./routes/admin/admin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "admin", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
