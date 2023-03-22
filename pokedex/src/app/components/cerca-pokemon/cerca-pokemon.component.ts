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
  id: number = this.searchPokemonService.id;
  pokemon: any;
  msg: string =
    "Inserire il nome o l'id di un Pokémon per visualizzarne i dati!";
  loadingDone: boolean = false;

  submit(): void {
    if (this.nomeInput.trim() === '') {
      this.nomeInput = '';
      this.msg = 'Il campo non può essere vuoto!';
    } else {
      this.loadingDone = false;
      this.pokemon = this.searchPokemonService
        .getPokemon(this.nomeInput.trim())
        .subscribe(
          (pkmn) => {
            this.pokemon = pkmn.body;
            this.loadingDone = true;
          },
          (err) => {
            this.msg = 'Inserire un nome valido!';
          }
        );
      this.nomeInput = '';
    }
  }

  ngOnInit(): void {
    if (this.id) {
      this.pokemon = this.searchPokemonService.pkmnRnd?.subscribe((pkmn) => {
        this.pokemon = pkmn.body;
        this.loadingDone = true;
      });
    }
  }
}
