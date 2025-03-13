import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private sharedCounterSubject = new BehaviorSubject<number>(0);
  sharedCounter$ = this.sharedCounterSubject.asObservable();

  updateSharedCounter(value: number) {
    this.sharedCounterSubject.next(value);
  }
}