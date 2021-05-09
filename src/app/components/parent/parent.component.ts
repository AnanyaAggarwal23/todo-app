import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Note } from '../../models/note.component';
import * as moment from 'moment';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;
  showForm = false;
  btnText: string;

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.selectedNote = null;
    this.btnText = 'Submit';
  }

  onEdit(note: Note) {
    this.selectedNote = note;
    this.btnText = 'Update';
  }

  onDelete(note: Note) {
    note.deletionDate = moment(new Date()).format('YYYY-MM-DD');
    this.notes = this.notes.filter((nt) => nt.owner !== note.owner);
    this.dataService.setNotes(this.notes);
  }

  onFormSubmit(note: Note) {
    if (this.btnText === 'Submit' && note.owner) {
      note.creationDate = moment(new Date()).format('YYYY-MM-DD');
      this.notes.push(note);
      this.dataService.setNotes(this.notes);
    } else if (this.btnText === 'Update' && note.owner) {
      note.editionDate = moment(new Date()).format('YYYY-MM-DD');
      this.notes = this.notes.map((nt) => {
        if (nt.owner === note.owner) {
          return note;
        }
        return nt;
      });
      this.dataService.setNotes(this.notes);
    }
    this.selectedNote = null;
    this.btnText = '';
  }
}
