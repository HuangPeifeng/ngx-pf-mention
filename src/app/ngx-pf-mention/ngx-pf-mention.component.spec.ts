import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPfMentionComponent } from './ngx-pf-mention.component';

describe('NgxPfMentionComponent', () => {
  let component: NgxPfMentionComponent;
  let fixture: ComponentFixture<NgxPfMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPfMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPfMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
