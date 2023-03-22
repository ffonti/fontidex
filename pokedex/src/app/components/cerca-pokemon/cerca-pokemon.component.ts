import { Component, OnInit } from '@angular/core';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-cerca-pokemon',
  templateUrl: './cerca-pokemon.component.html',
  styleUrls: ['./cerca-pokemon.component.css'],
})
export class CercaPokemonComponent implements OnInit {
  constructor(private searchPokemonService: SearchPokemonService) {}

  nomeInput: string = '';

  is404: boolean = this.searchPokemonService.is404;
  id: number = this.searchPokemonService.id;
  pokemon: any;

  submit(): void {
    this.pokemon = this.searchPokemonService
      .getPokemon(this.nomeInput)
      .subscribe((pkmn) => {
        this.pokemon = pkmn.body;
        console.log(this.pokemon);
      });
  }

  ngOnInit(): void {
    if (this.id) {
      this.pokemon = this.searchPokemonService.pkmnRnd?.subscribe((pkmn) => {
        this.pokemon = pkmn.body;
        console.log(this.pokemon);
      });
    }
  }
}
