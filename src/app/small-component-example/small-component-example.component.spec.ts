import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallComponentExampleComponent } from './small-component-example.component';

describe('SmallComponentExampleComponent', () => {
  let component: SmallComponentExampleComponent;
  let fixture: ComponentFixture<SmallComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallComponentExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
