import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirColaComponent } from './pedir-cola.component';

describe('PedirColaComponent', () => {
  let component: PedirColaComponent;
  let fixture: ComponentFixture<PedirColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
