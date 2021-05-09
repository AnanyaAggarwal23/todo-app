import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../../models/note.component';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent {
  readonly controls = {
    ownerControl: new FormControl('', Validators.required),
    titleControl: new FormControl('', Validators.required),
    bodyControl: new FormControl('', Validators.required),
    mediaControl: new FormControl(''),
    statusControl: new FormControl('', Validators.required),
    creationDateControl: new FormControl('', Validators.required),
    editionDateControl: new FormControl('', Validators.required),
    deletionDateControl: new FormControl('', Validators.required),
  };
  dataForm: FormGroup;
  disableOwnerControl: boolean = false;

  @Input()
  set btnText(text: string) {
    this._btnText = text;
    this.disableOwnerControl = text === 'Update' ? true : false;
  }
  get btnText() {
    return this._btnText;
  }
  _btnText: string;

  @Input()
  set selectedNote(note: Note) {
    this._selectedNote = note;
    this.dataForm
      .get('ownerControl')
      .setValue(this._selectedNote ? this._selectedNote.owner : '');
    this.dataForm
      .get('titleControl')
      .setValue(this._selectedNote ? this._selectedNote.title : '');
    this.dataForm
      .get('bodyControl')
      .setValue(this._selectedNote ? this._selectedNote.body : '');
    this.dataForm
      .get('mediaControl')
      .setValue(this._selectedNote ? this._selectedNote.media : '');
    this.dataForm
      .get('statusControl')
      .setValue(this._selectedNote ? this._selectedNote.status : '');
    this.dataForm
      .get('creationDateControl')
      .setValue(this._selectedNote ? this._selectedNote.creationDate : '');
    this.dataForm
      .get('editionDateControl')
      .setValue(this._selectedNote ? this._selectedNote.editionDate : '');
    this.dataForm
      .get('deletionDateControl')
      .setValue(this._selectedNote ? this._selectedNote.deletionDate : '');
  }
  get selectedNote() {
    return this._selectedNote;
  }
  _selectedNote: Note;

  @Output() dataModified = new EventEmitter<Note>();

  constructor() {
    this.dataForm = new FormGroup(this.controls);
  }

  onSubmit() {
    let noteObj = {
      owner: this.dataForm.value.ownerControl,
      title: this.dataForm.value.titleControl,
      body: this.dataForm.value.bodyControl,
      media: this.dataForm.value.mediaControl,
      status: this.dataForm.value.statusControl,
      creationDate: this.dataForm.value.creationDateControl,
      editionDate: this.dataForm.value.editionDateControl,
      deletionDate: this.dataForm.value.deletionDateControl,
    };
    this.dataModified.emit(noteObj);
    this.dataForm.reset();
  }
}
