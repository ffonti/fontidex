import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeRouteService {
  pokemon: any;
  isDetailPage: boolean = false;

  setPokemon(pokemon: any) {
    this.pokemon = pokemon;
  }
}
