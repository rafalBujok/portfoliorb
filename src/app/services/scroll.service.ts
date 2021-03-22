import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private sesion = new Subject<any>();

  sesionObs$ = this.sesion.asObservable();

  constructor() { }

  public notifyOther(data: any) {
    if (data) {
      this.sesion.next(data);
    }
  }
}
