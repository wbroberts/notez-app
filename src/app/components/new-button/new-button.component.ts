import { ModalController } from '@ionic/angular';
import { Component, Output, EventEmitter } from '@angular/core';
import { NewNoteModal } from '../new-note-modal/new-note.modal';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.scss']
})
export class NewButtonComponent {
  @Output('added') noteAdded: EventEmitter<boolean> = new EventEmitter();

  constructor(private mCtrl: ModalController) {}

  async newNote() {
    const modal = await this.mCtrl.create({
      component: NewNoteModal
    });

    modal.onWillDismiss().then(res => {
      if (res.data.add) {
        return this.noteAddedSuccess();
      }
    });

    return await modal.present();
  }

  noteAddedSuccess(): void {
    return this.noteAdded.emit(true);
  }
}
