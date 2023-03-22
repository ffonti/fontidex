import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeRouteService } from 'src/app/services/change-route.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  pokemon: any;

  constructor(
    private changeRouteService: ChangeRouteService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.changeRouteService.isDetailPage = false;
  }

  ngOnInit(): void {
    this.pokemon = this.changeRouteService.pokemon;
    this.changeRouteService.isDetailPage = true;
  }
}
