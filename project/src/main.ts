import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Child1Component } from './app/components/child1/child1.component';
import { Child2Component } from './app/components/child2/child2.component';
import { Child3Component } from './app/components/child3/child3.component';
import { GlobalStateService } from './app/services/global-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Child1Component, Child2Component, Child3Component],
  templateUrl: './app/app.component.html',
  styles: [`
    .app-container {
      padding: 2rem;
    }
    .global-controls {
      margin-bottom: 2rem;
      padding: 1rem;
      background-color: #f0f0f0;
      border-radius: 4px;
    }
    .components-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `]
})
export class App {
  globalCounter = 0;

  constructor(private globalStateService: GlobalStateService) {
    this.globalStateService.sharedCounter$.subscribe(
      value => this.globalCounter = value
    );
  }

  updateGlobalCounter() {
    this.globalStateService.updateSharedCounter(this.globalCounter + 1);
  }
}

bootstrapApplication(App);