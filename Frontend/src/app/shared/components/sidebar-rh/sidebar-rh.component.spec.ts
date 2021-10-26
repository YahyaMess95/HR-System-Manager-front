import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRhComponent } from './sidebar-rh.component';

describe('SidebarRhComponent', () => {
  let component: SidebarRhComponent;
  let fixture: ComponentFixture<SidebarRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
