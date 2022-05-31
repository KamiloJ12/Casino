import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoEnVivoComponent } from './components/casino-en-vivo/casino-en-vivo.component';
import { CasinoComponent } from './components/casino/casino.component';

const routes: Routes = [
  {path:'', component: CasinoComponent},
  {path:'casinoEnVivo', component: CasinoEnVivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
