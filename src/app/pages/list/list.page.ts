import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';
import { ModalController } from '@ionic/angular';
import { NoteDetailModal } from './../../components/note-detail/note-detail.modal';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  notes: Note[] = [];
  noNotes: boolean = false;

  constructor(private noteService: NoteService, public mCtrl: ModalController) {}

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

  async viewNoteDetails(noteId: string) {
    const modal = await this.mCtrl.create({
      component: NoteDetailModal,
      componentProps: {
        noteId
      },
      showBackdrop: true
    });

    modal.onWillDismiss().then(res => {
      if (res.data.deleted) {
        this.notes = this.notes.filter(note => note.id !== res.data.noteId);
      }
    });

    return await modal.present();
  }

  private sortByLastTouched(array: Note[]) {}
}
