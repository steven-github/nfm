import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeComponentExampleComponent } from './large-component-example.component';

describe('LargeComponentExampleComponent', () => {
  let component: LargeComponentExampleComponent;
  let fixture: ComponentFixture<LargeComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeComponentExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
