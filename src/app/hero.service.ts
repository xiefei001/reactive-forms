/*
 * Copyright 2017 SWM Services GmbH
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Hero, heroes} from './data-model';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
/**
 * Hero Service Implementierung.
 * @author xie.fei
 * @since 1.0
 */

@Injectable()
export class HeroService {
  delayMs = 500;

  getHeroes(): Observable<Hero[]> {
    return of(heroes).delay(this.delayMs);
  }

  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero);
    return of(newHero).delay(this.delayMs);
  }
}
