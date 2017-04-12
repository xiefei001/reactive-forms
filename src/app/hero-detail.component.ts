/*
 * Copyright 2017 SWM Services GmbH
 */

/**
 * Hero Details Implementierung.
 * @author xie.fei
 * @since 1.0
 */

import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {states} from './data-model';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  private createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}
