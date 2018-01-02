import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarColaComponent } from './dar-cola.component';

describe('DarColaComponent', () => {
  let component: DarColaComponent;
  let fixture: ComponentFixture<DarColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
