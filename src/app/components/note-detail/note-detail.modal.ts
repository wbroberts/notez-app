import { quillConfig } from './../../config/qill.config';
import { ModalController } from '@ionic/angular';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Sanitizer
} from '@angular/core';
import * as moment from 'moment';

import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

@Component({
  selector: 'app-note-detail-modal',
  templateUrl: './note-detail.modal.html',
  styleUrls: ['./note-detail.modal.scss']
})
export class NoteDetailModal implements OnInit {
  note: Note;
  isLoaded: boolean = false;
  body: any;
  noteId: string;

  @ViewChild('body') el: ElementRef;

  private quill: any;

  constructor(
    private noteService: NoteService,
    private mCtrl: ModalController,
    private sanitize: Sanitizer
  ) {}

  ngOnInit() {
    this.noteService.getNote(this.noteId).then(note => {
      note.lastEdited = moment(note.lastEdited).fromNow();
      // console.log(this.el.nativeElement);
      note.body = new QuillDeltaToHtmlConverter(note.body['ops']).convert();

      this.body = this.sanitize.sanitize(1, note.body);
      this.note = note;
      this.isLoaded = true;
    });
  }

  deleteNote() {
    this.noteService.deleteNote(this.noteId).then(() => {
      this.mCtrl.dismiss({
        deleted: true,
        noteId: this.noteId
      });
    });
  }

  closeModal() {
    this.mCtrl.dismiss({
      deleted: false
    });
  }
}
