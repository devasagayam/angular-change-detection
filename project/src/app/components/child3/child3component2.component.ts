import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { GlobalStateService } from '../../services/global-state.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-child3component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child3component2.component.html',
  styles: [`
    .component {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid green;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child3Component2 extends BaseComponent {
  gloablCounter$:Observable<number>;
  constructor(
    globalStateService: GlobalStateService,
    protected override cdr: ChangeDetectorRef
  ) {
    super(globalStateService, cdr);
    this.gloablCounter$ = this.globalStateService.sharedCounter$.pipe(tap((n)=>console.log('recived data',n)
    ))
  }
  changesCounter = 0;
  override ngDoCheck(){
    this.changesCounter  += 1;
    console.log('view checked and my name is',this.constructor.name)
  }
}