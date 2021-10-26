import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDAComponent } from './archive-da.component';

describe('ArchiveDAComponent', () => {
  let component: ArchiveDAComponent;
  let fixture: ComponentFixture<ArchiveDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
