import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CercaPokemonComponent } from './components/cerca-pokemon/cerca-pokemon.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'cercaPokemon', component: CercaPokemonComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: '', redirectTo: 'homePage', pathMatch: 'full' }, //Default route
  { path: '**', component: PageNotFoundComponent }, //Errore, pagina non trovata
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
