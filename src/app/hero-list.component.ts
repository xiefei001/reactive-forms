/*
 * Copyright 2017 SWM Services GmbH
 */
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import {Hero} from './data-model';
import {HeroService} from './hero.service';
/**
 * List Heros Component.
 * @author xie.fei
 * @since 1.0
 */

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes().finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero): void {
    this.selectedHero = hero;
  }
}
