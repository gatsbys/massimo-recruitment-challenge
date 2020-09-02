import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public showLoading = new BehaviorSubject<boolean>(false);
  public isActive = true;

  constructor() { }
}
