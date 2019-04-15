import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class DbService {

    constructor(private db: AngularFireDatabase) { }


}
