import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChangeRouteService } from 'src/app/services/change-route.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  constructor(private changeRouteService: ChangeRouteService) {}

  ngOnDestroy(): void {
    this.changeRouteService.isDetailPage = false;
  }

  ngOnInit(): void {
    this.changeRouteService.isDetailPage = true;
  }
}
