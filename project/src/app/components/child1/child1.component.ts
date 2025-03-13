import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { Child1Component1 } from './child1component1.component';
import { Child1Component2 } from './child1component2.component';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule, Child1Component1, Child1Component2],
  templateUrl: './child1.component.html',
  styles: [`
    .component {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid red;
    }
  `]
})
export class Child1Component extends BaseComponent {
  constructor(
    globalStateService: GlobalStateService,
    protected override cdr: ChangeDetectorRef
  ) {
    super(globalStateService, cdr);
  }
  changesCounter = 0;
  override ngDoCheck(){
    this.changesCounter  += 1;
    console.log('view checked and my name is',this.constructor.name)
  }
}