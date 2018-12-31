import { QuillComponent } from './../components/quill/quill.component';
import { NewButtonComponent } from './../components/new-button/new-button.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../components/search/search.component';

@NgModule({
  declarations: [HeaderComponent, NewButtonComponent, QuillComponent, SearchComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [HeaderComponent, NewButtonComponent, QuillComponent, SearchComponent]
})
export class SharedModule {}
