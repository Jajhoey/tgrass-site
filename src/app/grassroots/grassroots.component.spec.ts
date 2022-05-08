import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassrootsComponent } from './grassroots.component';

describe('GrassrootsComponent', () => {
  let component: GrassrootsComponent;
  let fixture: ComponentFixture<GrassrootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrassrootsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrassrootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
