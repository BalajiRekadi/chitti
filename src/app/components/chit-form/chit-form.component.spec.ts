import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitFormComponent } from './chit-form.component';

describe('ChitFormComponent', () => {
  let component: ChitFormComponent;
  let fixture: ComponentFixture<ChitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
