import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { Child2Component1 } from './child2component1.component';
import { Child2Component2 } from './child2component2.component';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule, Child2Component1, Child2Component2],
  templateUrl: './child2.component.html',
  styles: [`
    .component {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid green;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component extends BaseComponent {
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