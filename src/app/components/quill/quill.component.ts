import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';

import { quillConfig } from './../../config/qill.config';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.scss']
})
export class QuillComponent implements AfterViewInit {
  @ViewChild('quill', { read: ElementRef }) el: ElementRef;
  private _quill: Quill;

  constructor() {}

  ngAfterViewInit() {
    this._quill = new Quill(this.el.nativeElement, quillConfig);
  }

  getContents() {
    return this._quill.getContents();
  }
}
