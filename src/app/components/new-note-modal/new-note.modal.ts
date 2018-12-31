import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

import { QuillComponent } from '../quill/quill.component';

@Component({
  selector: 'app-new-note-modal',
  templateUrl: './new-note.modal.html',
  styleUrls: ['./new-note.modal.scss']
})
export class NewNoteModal implements OnInit {
  @ViewChild(QuillComponent) quill: QuillComponent;

  private noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private mCtrl: ModalController
  ) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {}

  dismissModal(isAdded: boolean) {
    this.noteForm.reset();
    this.quill.deleteContents();

    this.mCtrl.dismiss({
      add: isAdded
    });
  }

  saveNote() {
    const body = this.quill.getContents();
    const { title } = this.noteForm.value;
    const note = {
      title,
      body
    };

    if (note.title.length === 0 || note.body.length === 0) {
      return;
    }

    this.noteService.saveNote(note).then(() => {
      this.dismissModal(true);
    });
  }
}
