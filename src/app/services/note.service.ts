import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Guid } from 'guid-typescript';
import * as moment from 'moment';

import { Note } from '../models/note.model';
import { StorageKey } from '../enums/storage.key';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private storage: Storage) {}

  async deleteNote(noteId: string): Promise<any> {
    return this.storage.remove(noteId);
  }

  async getAllNotes(): Promise<Note[]> {
    let notes = [];

    await this.storage.forEach(note => {
      notes = [...notes, JSON.parse(note)];
    });

    return await notes;
  }

  async getNote(noteId: string): Promise<Note> {
    return await this.storage.get(noteId).then(note => JSON.parse(note));
  }

  async saveNote(note): Promise<any> {
    const noteToSave: Note = {
      id: Guid.create().toString(),
      date: moment(),
      lastEdited: moment(),
      ...note
    };

    return await this.storage.set(noteToSave.id, JSON.stringify(noteToSave));
  }
}
