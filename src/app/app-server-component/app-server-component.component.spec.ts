import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServerComponentComponent } from './app-server-component.component';

describe('AppServerComponentComponent', () => {
  let component: AppServerComponentComponent;
  let fixture: ComponentFixture<AppServerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppServerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppServerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
