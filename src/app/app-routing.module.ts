import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoEnVivoComponent } from './components/casino-en-vivo/casino-en-vivo.component';
import { CasinoComponent } from './components/casino/casino.component';
import {TorneoComponent} from './components/torneo/torneo.component';

const routes: Routes = [
  {path:'', component: CasinoComponent},
  {path:'casinoEnVivo', component: CasinoEnVivoComponent},
  {path:'torneo', component: TorneoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
