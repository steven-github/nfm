import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumComponentExampleComponent } from './medium-component-example.component';

describe('MediumComponentExampleComponent', () => {
  let component: MediumComponentExampleComponent;
  let fixture: ComponentFixture<MediumComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumComponentExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
