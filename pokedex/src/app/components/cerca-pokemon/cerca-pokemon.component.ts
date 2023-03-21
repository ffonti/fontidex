import { Component } from '@angular/core';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-cerca-pokemon',
  templateUrl: './cerca-pokemon.component.html',
  styleUrls: ['./cerca-pokemon.component.css'],
})
export class CercaPokemonComponent {
  constructor(private searchPokemonService: SearchPokemonService) {}

  nomeInput: string = '';

  is404: boolean = this.searchPokemonService.is404;
  pokemon: any;

  submit(): void {
    this.pokemon = this.searchPokemonService
      .getPokemon(this.nomeInput)
      .subscribe((pkmn) => {
        this.pokemon = pkmn.body;
        console.log(this.pokemon);
      });
  }
}
