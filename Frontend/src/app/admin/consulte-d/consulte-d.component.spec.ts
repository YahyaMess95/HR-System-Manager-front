import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteDComponent } from './consulte-d.component';

describe('ConsulteDComponent', () => {
  let component: ConsulteDComponent;
  let fixture: ComponentFixture<ConsulteDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulteDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
