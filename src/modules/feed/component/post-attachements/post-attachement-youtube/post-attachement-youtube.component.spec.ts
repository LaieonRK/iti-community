import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAttachementYoutubeComponent } from './post-attachement-youtube.component';

describe('PostAttachementYoutubeComponent', () => {
  let component: PostAttachementYoutubeComponent;
  let fixture: ComponentFixture<PostAttachementYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAttachementYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAttachementYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
