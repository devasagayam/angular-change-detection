import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-child1component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1component2.component.html',
  styles: [`
    .component {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid red;
    }
  `]
})
export class Child1Component2 extends BaseComponent {
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