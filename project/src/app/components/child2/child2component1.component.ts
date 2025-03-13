import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-child2component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2component1.component.html',
  styles: [`
    .component {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid green;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component1 extends BaseComponent {
  constructor(
    globalStateService: GlobalStateService,
    protected override cdr: ChangeDetectorRef
  ) {
    super(globalStateService, cdr);
  }
    
}