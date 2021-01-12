import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' }) // more modern and easier syntax instead of adding in providers in app.components.ts
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>();
  activatedEmitter = new Subject<boolean>();
}
