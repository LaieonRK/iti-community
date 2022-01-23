import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAttachementImageComponent } from './post-attachement-image.component';

describe('PostAttachementImageComponent', () => {
  let component: PostAttachementImageComponent;
  let fixture: ComponentFixture<PostAttachementImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAttachementImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAttachementImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
