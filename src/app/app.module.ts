import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnglandDetailsComponent } from './england-details/england-details.component';
import { SpainDetailsComponent } from './spain-details/spain-details.component';
import { GermanyDetailsComponent } from './germany-details/germany-details.component';
import { FranceDetailsComponent } from './france-details/france-details.component';
import { ItalyDetailsComponent } from './italy-details/italy-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnglandDetailsComponent,
    SpainDetailsComponent,
    GermanyDetailsComponent,
    FranceDetailsComponent,
    ItalyDetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
