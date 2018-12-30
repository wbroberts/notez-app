import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss']
})
export class NewNotePage {
  private noteForm: FormGroup;

  constructor(private fb: FormBuilder, private noteService: NoteService) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  saveNote() {
    const { title, body } = this.noteForm.value;
    const note = { title, body };

    this.noteService.saveNote(note).then(res => console.log(res), e => console.log(e));
  }
}
