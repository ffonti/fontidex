import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeRouteService {
  constructor() {}

  isDetailPage: boolean = false;
}
