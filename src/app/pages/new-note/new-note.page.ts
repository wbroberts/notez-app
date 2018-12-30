import { QuillComponent } from './../../components/quill/quill.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss']
})
export class NewNotePage implements OnInit {
  @ViewChild(QuillComponent) quill: QuillComponent;

  private noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private router: Router
  ) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {}

  saveNote() {
    const body = this.quill.getContents();
    const { title } = this.noteForm.value;
    const note = {
      title,
      body
    };

    this.noteService.saveNote(note).then(() => {
      this.router.navigate(['notes']);
    });
  }
}
