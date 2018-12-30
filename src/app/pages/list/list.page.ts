import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  notes: Note[] = [];

  noNotes: boolean = false;

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit() {
    this.noteService.getAllNotes().then(notes => {
      if (notes.length === 0) {
        return (this.noNotes = true);
      }

      this.notes = notes.map(note => {
        note.lastEdited = moment(note.lastEdited).fromNow();
        return note;
      });
    });
  }

  viewNoteDetails(noteId: string) {
    this.router.navigate(['note-details', noteId]);
  }

  private sortByLastTouched(array: Note[]) {}
}
