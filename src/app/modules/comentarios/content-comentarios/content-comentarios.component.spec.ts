import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComentariosComponent } from './content-comentarios.component';

describe('ContentComentariosComponent', () => {
  let component: ContentComentariosComponent;
  let fixture: ComponentFixture<ContentComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
