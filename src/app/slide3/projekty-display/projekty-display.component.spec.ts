import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektyDisplayComponent } from './projekty-display.component';

describe('ProjektyDisplayComponent', () => {
  let component: ProjektyDisplayComponent;
  let fixture: ComponentFixture<ProjektyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
