import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss']
})
export class NoteDetailsPage implements OnInit {
  note: Note;
  isLoaded: boolean = false;

  private noteId: string;

  constructor(private noteService: NoteService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => (this.noteId = param.noteId));
  }

  ngOnInit() {
    this.noteService.getNote(this.noteId).then(note => {
      note.lastEdited = moment(note.lastEdited).fromNow();

      this.note = note;
      this.isLoaded = true;
    });
  }
}
