import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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

  private noteList: Note[] = [];

  constructor(private noteService: NoteService, public mCtrl: ModalController) {}

  ngOnInit() {
    this.getAllNotes();
  }

  filterNotes(filterBy: string) {
    const noteList = this.noteList.slice();

    this.notes = noteList.filter(note => {
      return note.title.toLowerCase().includes(filterBy.toLowerCase());
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

  newNoteAdded(event: boolean): void {
    if (event) {
      return this.getAllNotes();
    }
  }

  private getAllNotes(): void {
    this.noteService.getAllNotes().then(notes => {
      if (notes.length === 0) {
        return (this.noNotes = true);
      }

      this.noteList = notes.map(note => {
        note.lastEdited = moment(note.lastEdited).fromNow();
        return note;
      });

      this.notes = this.noteList.slice();
    });
  }

  private sortByLastTouched(array: Note[]) {}
}
