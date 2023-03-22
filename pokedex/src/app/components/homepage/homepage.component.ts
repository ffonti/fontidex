import { Component } from '@angular/core';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private searchPokemonService: SearchPokemonService) {}

  submit(): void {
    this.searchPokemonService.randomPokemon();
  }

  cercaPokemon(): void {
    this.searchPokemonService.cercaPokemon();
  }
}
