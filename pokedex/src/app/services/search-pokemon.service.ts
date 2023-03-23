import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonService {
  constructor(private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  urlGen: string = 'https://pokeapi.co/api/v2/generation/';
  id: number = 0;
  pkmnRnd?: Observable<any>;

  getPokemon(nome: string): Observable<any> {
    return this.http
      .get((this.url + nome).toLowerCase(), { observe: 'response' })
      .pipe(
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      );
  }

  getGeneration(gen: number): Observable<any> {
    return this.http
      .get((this.urlGen + gen).toLowerCase(), { observe: 'response' })
      .pipe(
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      );
  }

  randomPokemon(): void {
    this.id = Math.floor(Math.random() * 1008);
    this.pkmnRnd = this.http.get(this.url + this.id, { observe: 'response' });
  }

  cercaPokemon(): void {
    this.id = 0;
  }
}
