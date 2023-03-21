import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonService {
  constructor(private http: HttpClient) { }

  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemon(nome: string): Observable<any> {
    return this.http.get(this.url + nome, { observe: 'response' }).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error(err));
      })
    );
  }
}
