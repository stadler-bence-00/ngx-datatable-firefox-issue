import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgxDatatableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
