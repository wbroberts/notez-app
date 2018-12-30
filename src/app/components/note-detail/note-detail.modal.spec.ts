import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailModal } from './note-detail.modal';

describe('NoteDetailModal', () => {
  let component: NoteDetailModal;
  let fixture: ComponentFixture<NoteDetailModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteDetailModal]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
