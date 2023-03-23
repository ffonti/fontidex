import { Component } from '@angular/core';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.css'],
})
export class GenerationListComponent {
  gen: number = 0;
  isGen: boolean = false;
  msg: string = 'Inserire una generazione!';
  // pokemon: any;

  constructor(private searchPokemonService: SearchPokemonService) {}

  onChange(value: number) {
    this.isGen = value !== 0;
    if (!value) {
      console.log('oooo no 0');
    } else {
      this.searchPokemonService.getGeneration(value).subscribe(
        (pkmn) => {
          console.log(pkmn);

          // this.pokemon = pkmn.body;
          // this.loadingDone = true;
        },
        (err) => {
          // this.msg = 'Inserire un nome valido!';
        }
      );
    }
  }
}
