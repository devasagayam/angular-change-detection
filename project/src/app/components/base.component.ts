import { Component, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalStateService } from '../services/global-state.service';

@Component({ template: '' })
export class BaseComponent implements DoCheck {
  @Input() parentName = '';
  counter = 0;
  constructor(
    protected globalStateService: GlobalStateService,
    protected cdr: ChangeDetectorRef
  ) {}

  ngDoCheck(){
    // console.log('view checked and my name is',this.constructor.name)
  }
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
    
    console.log(`${this.getComponentName()} Updated`);
  }

  protected getComponentName(): string {
    return this.constructor.name;
  }
}