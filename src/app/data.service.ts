import { Injectable } from '@angular/core';
import { Note } from './models/note.component';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DataService {
  notes = new BehaviorSubject<Note[]>(null);

  constructor() {}
  setNotes(notes: Note[]) {
    this.notes.next(notes);
  }

  getNotes() {
    return this.notes.asObservable();
  }
}
