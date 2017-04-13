/*
 * Copyright 2017 SWM Services GmbH
 */

/**
 * Hero Details Implementierung.
 * @author xie.fei
 * @since 1.0
 */

import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {Hero, states, Address} from './data-model';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {


  @Input()
  private hero: Hero;

  heroForm: FormGroup;
  states = states;
  nameChangeLog: string[] = [];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
  }


  ngOnChanges(changes: SimpleChanges): void {
    //this.heroForm.reset();
    this.heroForm.reset({
      name: this.hero.name
      // address: this.hero.addresses[0] || new Address()
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  logNameChange(): void {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(value => this.nameChangeLog.push(value));
  }

  private createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  private setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(adr => this.fb.group(adr));
    this.heroForm.setControl('secretLairs', this.fb.array(addressFGs));
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair(i: number) {
    this.secretLairs.removeAt(i);
  }


}
