import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeRouteService } from 'src/app/services/change-route.service';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.css'],
})
export class GenerationListComponent {
  gen: number = 0;
  msg: string = 'Inserire una generazione!';
  pokemons: any;
  pokemon: any;

  constructor(
    private searchPokemonService: SearchPokemonService,
    private changeRouteService: ChangeRouteService,
    private router: Router
  ) {}

  onChange(value: number) {
    this.gen = value;
    if (!value) {
      this.gen = 0;
    } else {
      this.searchPokemonService.getGeneration(value).subscribe((pkmn) => {
        this.pokemons = pkmn.body.pokemon_species;
      });
    }
  }

  pokemonId(nome: string) {
    this.pokemon = this.searchPokemonService
      .getPokemon(nome)
      .subscribe((pkmn) => {
        this.pokemon = pkmn.body;
        this.changeRouteService.setPokemon(this.pokemon);
        this.router.navigateByUrl('/details/' + this.pokemon.id);
      });
  }
}
