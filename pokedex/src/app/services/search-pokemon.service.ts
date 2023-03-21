import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonService {
  constructor(private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  is404: boolean = false;

  getPokemon(nome: string): Observable<any> {
    return this.http
      .get((this.url + nome).toLowerCase(), { observe: 'response' })
      .pipe(
        catchError((err) => {
          alert('Inserire un nome valido!');
          this.is404 = true;
          return throwError(() => new Error(err));
        })
      );
  }
}
