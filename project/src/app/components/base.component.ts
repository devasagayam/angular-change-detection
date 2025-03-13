import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalStateService } from '../services/global-state.service';

@Component({ template: '' })
export class BaseComponent {
  @Input() parentName = '';
  counter = 0;
  changesCounter = 0;
  constructor(
    protected globalStateService: GlobalStateService,
    protected cdr: ChangeDetectorRef
  ) {}

  increment() {
    this.counter++;
    console.log(`${this.getComponentName()} counter incremented to ${this.counter}`);
    // this.cdr.markForCheck();
  }

  decrement() {
    this.counter--;
    console.log(`${this.getComponentName()} counter decremented to ${this.counter}`);
    // this.cdr.markForCheck();
  }

  trackChanges() {
    this.changesCounter  += 1;
    console.log(`${this.getComponentName()} Updated`);
  }

  protected getComponentName(): string {
    return this.constructor.name;
  }
}