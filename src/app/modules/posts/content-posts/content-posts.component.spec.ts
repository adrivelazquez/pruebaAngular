import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPostsComponent } from './content-posts.component';

describe('ContentPostsComponent', () => {
  let component: ContentPostsComponent;
  let fixture: ComponentFixture<ContentPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
