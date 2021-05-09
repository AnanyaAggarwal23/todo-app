import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Note } from '../../../models/note.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input()
  set notes(notes: Note[]) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  _notes: Note[];

  @Output() editNote = new EventEmitter<Note>();
  @Output() deleteNote = new EventEmitter<Note>();

  constructor() {}

  onEdit(note: Note) {
    this.editNote.emit(note);
  }

  onDelete(note: Note) {
    this.deleteNote.emit(note);
  }
}
