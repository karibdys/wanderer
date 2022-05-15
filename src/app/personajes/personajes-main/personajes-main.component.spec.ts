import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesMainComponent } from './personajes-main.component';

describe('PersonajesMainComponent', () => {
  let component: PersonajesMainComponent;
  let fixture: ComponentFixture<PersonajesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
