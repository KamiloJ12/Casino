import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CasinoComponent } from './components/casino/casino.component';
import { CasinoEnVivoComponent } from './components/casino-en-vivo/casino-en-vivo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CasinoComponent,
    CasinoEnVivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
