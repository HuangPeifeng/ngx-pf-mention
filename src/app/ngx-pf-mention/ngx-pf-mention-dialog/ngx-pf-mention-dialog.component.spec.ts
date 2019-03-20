import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPfMentionDialogComponent } from './ngx-pf-mention-dialog.component';

describe('NgxPfMentionDialogComponent', () => {
  let component: NgxPfMentionDialogComponent;
  let fixture: ComponentFixture<NgxPfMentionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPfMentionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPfMentionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
