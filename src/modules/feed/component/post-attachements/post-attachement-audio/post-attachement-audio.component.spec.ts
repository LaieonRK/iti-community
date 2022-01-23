import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAttachementAudioComponent } from './post-attachement-audio.component';

describe('PostAttachementAudioComponent', () => {
  let component: PostAttachementAudioComponent;
  let fixture: ComponentFixture<PostAttachementAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAttachementAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAttachementAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
