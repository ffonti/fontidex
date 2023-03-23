import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CercaPokemonComponent } from './components/cerca-pokemon/cerca-pokemon.component';
import { GenerationListComponent } from './components/generation-list/generation-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LolComponent } from './components/lol/lol.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'cercaPokemon', component: CercaPokemonComponent },
  {
    path: 'details',
    component: PokemonDetailsComponent,
    children: [{ path: ':id', component: PokemonDetailsComponent }],
  },
  { path: 'cursed', component: LolComponent },
  { path: 'generationList', component: GenerationListComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: '', redirectTo: 'homePage', pathMatch: 'full' }, //Default route
  { path: '**', component: PageNotFoundComponent }, //Errore, pagina non trovata
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
