import { inject, Injectable } from '@angular/core';
import {
  Auth,
  user,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  public user$ = user(this.auth);

  public currentUser = toSignal(this.user$);

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return signOut(this.auth);
  }

  getUID() {
    return this.currentUser()?.uid;
  }
}
