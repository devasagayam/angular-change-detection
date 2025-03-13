import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { Child3Component1 } from './child3component1.component';
import { Child3Component2 } from './child3component2.component';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule, Child3Component1, Child3Component2],
  templateUrl: './child3.component.html',
  styles: [`
    .component {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid green;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child3Component extends BaseComponent {
  constructor(
    globalStateService: GlobalStateService,
    protected override cdr: ChangeDetectorRef
  ) {
    super(globalStateService, cdr);
  }
}