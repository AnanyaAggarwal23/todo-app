import { Component } from '@angular/core';
import { DataService } from './data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  constructor(private dataService: DataService) {
    this.dataService.setNotes([
      {
        owner: 'Ananya',
        title: 'Todo',
        body: 'Complete angular assignment',
        media: 'NA',
        status: 'Done',
        creationDate: moment(new Date()).format('YYYY-MM-DD'),
        editionDate: moment(new Date()).format('YYYY-MM-DD'),
        deletionDate: moment(new Date()).format('YYYY-MM-DD'),
      },
      {
        owner: 'Aditya',
        title: 'Todo',
        body: 'Complete angular assignment',
        media: 'NA',
        status: 'Done',
        creationDate: moment(new Date()).format('YYYY-MM-DD'),
        editionDate: moment(new Date()).format('YYYY-MM-DD'),
        deletionDate: moment(new Date()).format('YYYY-MM-DD'),
      },
    ]);
  }
}
