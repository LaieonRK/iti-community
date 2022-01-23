import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAttachementVideoComponent } from './post-attachement-video.component';

describe('PostAttachementVideoComponent', () => {
  let component: PostAttachementVideoComponent;
  let fixture: ComponentFixture<PostAttachementVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAttachementVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAttachementVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
