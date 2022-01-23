import { Component, Input, OnInit } from '@angular/core';
import { MessageImageElement } from '../../../post.model';

@Component({
  selector: 'app-post-attachement-image',
  templateUrl: './post-attachement-image.component.html',
  styleUrls: ['./post-attachement-image.component.less']
})
export class PostAttachementImageComponent implements OnInit {
  @Input()
  element: MessageImageElement;

  constructor() { }

  ngOnInit(): void {
  }

}
