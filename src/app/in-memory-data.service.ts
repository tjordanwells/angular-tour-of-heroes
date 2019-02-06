import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Wonder Woman' },
      { id: 14, name: 'Green Lantern' },
      { id: 15, name: 'Shazam!' },
      { id: 16, name: 'Martian Manhunter' },
      { id: 17, name: 'Cyborg' },
      { id: 18, name: 'Aquaman' },
      { id: 19, name: 'The Green Arrow' },
      { id: 20, name: 'Animal Man' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
