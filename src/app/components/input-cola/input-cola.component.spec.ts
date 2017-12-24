import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColaComponent } from './input-cola.component';

describe('InputColaComponent', () => {
  let component: InputColaComponent;
  let fixture: ComponentFixture<InputColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
