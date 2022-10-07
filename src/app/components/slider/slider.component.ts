import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/images-sizes';
import { Item } from '../item/item';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]), //How the transition should be from the void to original state(*),and from original state to void
      // transition('* => void', [animate('500ms')]), // and from original state to void
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Item[] = []; // Movie[] is used here coz it is not just the ssingle data taht we are using, it is the array of dats that have been looped over.
  @Input() isBanner: boolean = false;

  readonly imagesSizes = IMAGE_SIZES;

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length; //If the array length is 20 and the slides reaches the last slide the value wil be divided by 20 and the modular value will be displayed for ex. 21/20 = 1 so it dislays the first slide.
      }, 5000); //If it is not banner then add a interval to it.
    }
  }
}
