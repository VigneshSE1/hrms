import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toast$ = new BehaviorSubject<any>(null);

  show(points: number) {
    this.toast$.next(points);
  }
}
