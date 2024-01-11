import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitlistComponent } from './chitlist.component';

describe('ChitlistComponent', () => {
  let component: ChitlistComponent;
  let fixture: ComponentFixture<ChitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
