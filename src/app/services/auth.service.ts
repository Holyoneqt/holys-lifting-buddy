import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    public authUser: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.authUser = this.firebaseAuth.authState;
        console.log(this.firebaseAuth.auth.currentUser);
    }

    public signInWithGoogle(): void {
        this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

}
