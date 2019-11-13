import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComentariosComponent } from './header-comentarios.component';

describe('HeaderComentariosComponent', () => {
  let component: HeaderComentariosComponent;
  let fixture: ComponentFixture<HeaderComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
