import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeRouteService } from 'src/app/services/change-route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private changeRouteService: ChangeRouteService
  ) {}

  isDetailsPage(): boolean {
    return this.changeRouteService.isDetailPage;
  }

  isNotHomePage(): boolean {
    return this.router.url !== '/homePage';
  }
}
